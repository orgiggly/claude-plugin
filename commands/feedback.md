---
name: feedback
description: Tell Orgiggly how your test run went — three quick questions, then (only if you say yes) your answers plus a redacted copy of this run's Claude Code sessions go to the Orgiggly team.
allowed-tools: Bash, AskUserQuestion
---

The user is sending feedback on their Orgiggly plugin test run. Keep it light and
quick: a thank-you, three questions, one look at what would be sent, one yes.

**Nothing leaves their machine until they explicitly say yes in Step 3.** Never
run `og feedback send` on your own initiative, on an ambiguous answer, or to
"save time". If they hesitate, the answer is no.

Use the `og` that came with this plugin. If `og feedback preview --help` fails (an old
`og` on PATH from an earlier version), run `"$CLAUDE_PLUGIN_ROOT/bin/og"` in its
place for every command below.

## Step 1 — Three questions

One `AskUserQuestion` call with all three (each has a free-text "Other", and say
so: their own words are worth more than any option):

1. **How did it go overall?** — "It built what I wanted" · "OK, with some
   snags" · "Frustrating" · "I didn't get it working"
2. **Where did you get stuck, if anywhere?** — "Nowhere" · "Installing or
   signing in" · "Getting the app I wanted" · "Publishing or sharing it"
3. **Did anything surprise you, good or bad?** — "Nothing in particular" ·
   "It was easier than I expected" · "It did something I didn't expect"

Take each answer as the option's label, plus any notes they added. Don't
re-ask or push for more.

## Step 2 — Prepare and show what would be sent

Pass the answers as JSON on stdin, with a quoted heredoc so nothing in their
words is interpreted by the shell:

```bash
og feedback preview --answers-stdin <<'EOF'
{"overall": "…", "stuck": "…", "surprised": "…"}
EOF
```

This sends nothing. It finds this test run's Claude Code sessions (ones that
used Orgiggly, since their last feedback), redacts them on this machine (home
folders, email addresses, API keys and tokens), and writes exactly what would be
sent into a local folder. Then tell the user, briefly and in your own words:

- each session it found: when, how it started, how big;
- what redaction removed (the preview's "Redaction removed" lines);
- the folder it wrote, so they can look inside before deciding;
- that it's read only by the Orgiggly team, kept until they ask for it to be
  deleted (dave@orgiggly.com), and that redaction can't catch everything — the
  transcript holds whatever they typed or pasted, so if anything private went
  into the session, they can send just their answers.

If it found no sessions, say only their answers would go.

If they want a session left out, run the preview again with
`--exclude <id>` (the 8-character id it printed, comma-separated for several),
and show the new result.

## Step 3 — Ask, then send only on a yes

One `AskUserQuestion`:

- **Send it all** — answers plus the redacted sessions
- **Send just my answers**
- **Don't send anything**

Then:

- **Send it all** → `og feedback send <id>` (the id the preview printed).
- **Send just my answers** → `og feedback send <id> --answers-only`.
- **Don't send anything** → send nothing. Tell them nothing left their machine,
  and that they can reply to the invite email instead whenever they like.

If `send` says they're not signed in, offer `og login` (it opens their browser),
then retry once; or suggest replying to the invite email instead. On success,
thank them in one line. Stop there.
