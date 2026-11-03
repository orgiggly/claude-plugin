# Live progress while an aiQuery step runs

An `aiQuery` step takes seconds to tens of seconds. By default the user sees a spinner and `runningTitle`. You can replace the spinner with a view that fills in as the answer streams: a terminal typing out code, a thought followed by a list that grows. This file is the recipe for that. The step's field rules are in `og reference pitfalls` (aiQuery section).

## What a running step holds

While the step runs, its stored value is `{ status: "running", partial?, ready? }`. Formulas read the parts the same way they read `<stepName>.result`:

- `<step>.partial`: everything written so far, **including strings still being written**. Use it for text that should visibly type out.
- `<step>.ready`: nothing half-written. Every string, number or boolean in it is final. Objects and lists may still grow: a list item appears once its first value settles and items never move. A `.ready` list item can be **open**, still gaining keys, so a card may have `title` but not yet `detail`. Show what has settled, or guard on a key (`t.detail ? ... : ''`) when a half-filled card would look wrong.

Use `.partial` for one long text you want to watch type; use `.ready` for lists and labels that should not flicker.

Both are `undefined` until the answer's JSON starts (for example while the model is on a web-search turn). They reset to `undefined` at the start of each internal turn, and disappear on completion, error or Stop (then `<step>.result` is the final answer). **Always guard**: `myStep.partial ? ... : 'Searching...'`. Reading `myStep.partial.x` with no `partial` yet gives `undefined`, so pair it with `?? ''` or a guard.

## The running slot

Ordinary child nodes placed in the aiQuery step's `_children` are its **running slot**. They render in place of the spinner, only while the step is running.

- No children: the default spinner and `runningTitle` show as before.
- `runningTitle`, when set, shows above the slot.
- A Stop button is always shown while running. You do not author it.
- Updates arrive about 10 times a second.
- Use any node types (`content`, `container`, ...). Their formulas read the step by bare name, like any later node in the flow.

Set `mockEnabled: true` on the step to preview the view with no credits: the mock result plays back as a roughly 2 second stream.

## The thought-first trick

Put a one-sentence reasoning field FIRST in `typeDescription`:

```
thought: string; // one sentence: what matters most here
```

It gives the user something to read immediately, and it tends to improve the answer because the model reasons before committing. It costs about 30 to 50 output tokens. Field order usually, but **not reliably**, follows `typeDescription`, so never depend on it for correctness: the view must still make sense if `thought` arrives late, and `thought` is also part of the final `.result`.

## Recipe: terminal (one long field, typed out)

Use when the answer is mostly one long string (code, a letter, a script). Show it from `.partial` in a monospace, dark `<pre>`, and a small header from another field once `.ready` has it. The header falls back to a default until `name` settles. `escapeHtml` is required: the text is model output. `overflow:auto` with a `max-height` keeps the box bounded (JS never runs in a Content template, so there is no auto-scroll).

The step, complete (put it in a `flow`'s `_children` between the input `screen` and the result `screen`):

```json
{
  "type": "aiQuery",
  "name": "write",
  "label": "Write it",
  "promptTemplate": "@`You are a ZX81 BASIC programmer. Write a short, working program for: ${idea}. Use only ZX81 BASIC, line numbers in steps of 10.`",
  "typeDescription": "@`{\n  name: string; // short program title, max 4 words\n  code: string; // the full ZX81 BASIC listing, one line per \\n\n}`",
  "idleTitle": "@`Write the program`",
  "runningTitle": "@`Typing it in...`",
  "actionLabel": "Write it",
  "mockEnabled": true,
  "mockResults": "@`{\"name\": \"Border Flasher\", \"code\": \"10 FOR I=0 TO 7\\n20 PRINT AT 10,10;\\\"HELLO\\\"\\n30 NEXT I\\n40 GOTO 10\"}`",
  "_children": [
    {
      "type": "content",
      "name": "termHeader",
      "htmlTemplate": "@`<div style='font-family:ui-monospace,Menlo,monospace;font-size:12px;color:#7f7;padding:4px 0;'>${write.ready.name ? escapeHtml(write.ready.name) : 'NEW PROGRAM'}</div>`"
    },
    {
      "type": "content",
      "name": "termBody",
      "htmlTemplate": "@`<pre style='background:#000;color:#9f9;font-family:ui-monospace,Menlo,monospace;font-size:13px;line-height:1.4;padding:12px;border-radius:6px;min-height:200px;max-height:320px;overflow:auto;white-space:pre-wrap;margin:0;'>${write.partial ? escapeHtml(write.partial.code ?? '') + '_' : 'Searching...'}</pre>`"
    }
  ]
}
```

## Recipe: thought + list (a light preview of the finished list)

Use when the answer is a list. The thought shows as an italic line from `.partial` (it types out); the list shows from `.ready`, so each item appears once its first value has settled and never flickers or moves. Deliberately lighter than the finished UI. Guard `t.detail` because a `.ready` item can be open.

```json
{
  "type": "aiQuery",
  "name": "plan",
  "label": "Plan it",
  "promptTemplate": "@`Break this goal into 5 to 7 concrete to-dos: ${goal}`",
  "typeDescription": "@`{\n  thought: string; // one sentence: what matters most here\n  todos: { title: string; detail: string }[]; // 5 to 7 items, most important first\n}`",
  "idleTitle": "@`Plan the day`",
  "runningTitle": "@`Thinking it through...`",
  "actionLabel": "Plan it",
  "mockEnabled": true,
  "mockResults": "@`{\"thought\": \"Start with the one thing that unblocks the rest.\", \"todos\": [{\"title\": \"Draft outline\", \"detail\": \"One page, bullet points\"}, {\"title\": \"Book the venue\", \"detail\": \"Call before noon\"}]}`",
  "_children": [
    {
      "type": "content",
      "name": "thinking",
      "htmlTemplate": "@`<p style='font-style:italic;color:#666;margin:0 0 12px;'>${plan.partial ? escapeHtml(plan.partial.thought ?? '') : 'Searching...'}</p>`"
    },
    {
      "type": "content",
      "name": "soFar",
      "htmlTemplate": "@`<ul style='list-style:none;padding:0;margin:0;'>${join(map(plan.ready.todos ?? [], (t) => '<li style=\"padding:6px 0;border-top:1px solid #eee;\"><strong>' + escapeHtml(t.title ?? '') + '</strong>' + (t.detail ? '<div style=\"color:#777;font-size:13px;\">' + escapeHtml(t.detail) + '</div>' : '') + '</li>'), '')}</ul>`"
    }
  ]
}
```

Here `soFar` builds the `<li>` rows with `join(map(list, (t) => '<li>' + ... + '</li>'), '')`, using single-quoted strings (with `\"` for attributes inside the JSON) so no nested backticks are needed.

## Checks before you finish

- Every formula that reads `.partial` / `.ready` is guarded for `undefined`.
- The `typeDescription` field names match what the slot reads (`code`, `name`, `thought`, `todos`).
- Test it with `mockEnabled: true` first, then turn it off for the real thing.
- Run `og validate-org` as usual.

## Freedom to adapt

These are starting points, not a menu. Invent your own: a progress checklist from `.ready`, a typed-out caption above a growing gallery, a status line that changes with each settled field. Any `content` HTML works so long as every `.partial` / `.ready` read is guarded.
