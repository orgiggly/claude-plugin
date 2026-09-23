<!-- Auto-generated from src/prompts/hostFunctions.ts. Do not edit manually. -->

# Host functions

Imperative actions callable from script-style formula contexts. Async host calls must appear at **statement top-level** or as the **RHS of an assignment** — never nested inside another expression. Bind a result to a variable first if you need to use it.

Sync hosts behave like ordinary built-in functions and may be called anywhere.

## In `content:action`

### `publishData` _(async)_

```
publishData({type: string, data: object | object[], scope?: "global" | "user" | "variant" | "group", variant?: string, groupKey?: string}): {id: string, ...} | [{id: string, ...}, ...]
```

Publishes one record (when `data` is an object) or N records (when `data` is an array of objects) of the given object type. Returns the created record(s) with server-stamped `id`, `createdAt`, `createdBy` fields populated. Use the returned `id` to link related records — e.g. stamp a parent's id into each child by including it in the child's object literal. `scope` must match the partition the type is bound at, and defaults to `"global"`: `"user"` writes the signed-in user's own partition, `"variant"` needs a `variant` key, and `"group"` needs a `groupKey` naming which group to write into (a member can be in several at once, so it is never inferred — a group publish with no key is refused rather than falling back to the shared collection).

**Examples:**

```
post = publishData({type: "TravelPost", data: {AuthorId: whoAmI, Details: comment}})
publishData({type: "Photo", data: photos.map((p) => ({Image: p.url, postId: post.id}))})
publishData({type: "Prediction", data: $rows('matchRows').map((r) => ({id: r.id, score: r.score}))})
publishData({type: "CardState", data: {cardId: card.id, box: 2}, scope: "user"})
publishData({type: "Expense", data: {amount: total, paidBy: whoAmI}, scope: "group", groupKey: currentTab})
```

### `createGroup` _(async)_

```
createGroup({groupKey: string, inviteCode?: string}): {groupKey: string, changed: boolean, role: string, addedAt: string}
```

Creates a membership group in this org and enrols the caller as its first `owner`, so they can immediately read and write the group's `scope: "group"` data. Pass an `inviteCode` to mint a shareable join credential at the same time. Idempotent for the owner — calling it again returns the existing membership with `changed: false`, so a flow step the user can re-enter is safe. Another user hitting an existing key is refused. Use this for a "start a new shared thing" step: a trip tab, a household, a team.

**Examples:**

```
tab = createGroup({groupKey: "tab-" + generateId(6), inviteCode: code})
createGroup({groupKey: slug(tripName)})
```

### `joinGroup` _(async)_

```
joinGroup({inviteCode?: string, groupKey?: string, claimEmail?: string}): {groupKey: string, changed: boolean, role: string, addedAt: string, matchedBy?: string}
```

Admits the caller to an existing group so its `scope: "group"` data becomes readable and writable for them. Either an `inviteCode` (the code itself is the credential — enough on its own) or a `groupKey` plus the `claimEmail` the caller was invited under, which is matched against their signed-in identity. Returns `matchedBy` naming which invitation matched, and `changed: false` when they were already a member, so re-running is safe. The caller's account is what gets recorded, so they must be signed in — an invitation can be addressed to an email or handle, but access is keyed on the account that claims it.

**Examples:**

```
joined = joinGroup({inviteCode: enteredCode})
joinGroup({groupKey: $args.tab, claimEmail: myEmail})
```

### `setAppValue` _(async)_

```
setAppValue(key: string, value: any): void
```

Writes an app-level value to the given pointer key (relative to the app root). The value persists across reloads via the existing localStorage AppInstance rail. Use this for 'remember who I am' / 'remember last choice' identity write-back — at the end of a flow, or straight from a Content action's script.

**Examples:**

```
setAppValue("whoAmI", AuthorId)
```

### `navigate` _(async)_

```
navigate(pointerKey: string, args?: object): void
```

Moves the app cursor to the given screen/section pointer key. Both forms push — a nav-stack entry (Back returns to the caller) plus a reset of any flow state under the target, exactly like an `<a>` link. The optional `args` object additionally exposes its values as `$args.<key>` on the destination screen — pair with `byId('Type', $args.id)` on the destination to land on a record you just created. From a content action's script, call it as the last statement — a preceding setAppValue(...) is the preselect-then-navigate idiom.

**Examples:**

```
navigate("home")
navigate("matchDetail", {founderId: newFounder.id})
```

### `replaceScreen` _(async)_

```
replaceScreen(pointerKey: string, args?: object): void
```

Swaps the current screen for the given screen/section pointer key WITHOUT adding a back-stack entry and WITHOUT resetting flow state under the target — Back returns to wherever the caller came from. Use for redirect-style moves (a landing screen that forwards to the right tab). Prefer `navigate` for ordinary drill-down: replacing into a screen that contains a flow re-shows the flow's last completed step instead of a fresh run.

**Examples:**

```
replaceScreen("home")
replaceScreen("tabDetail", {id: $params.id})
```

### `back` _(async)_

```
back(): void
```

Goes back one nav-stack entry — exactly what the Back button (or a legacy `href="@pop"`) does. Takes no arguments. A Back/Cancel control in a content template is an action whose script is just `back()`.

**Examples:**

```
back()
```

### `updateData` _(async)_

```
updateData({type: string, id: string, patch: object}): {id: string, ...}
```

Partial-updates an existing record by id. Reads the current record from $data, shallow-merges `patch` over it, and writes back via the same path the Form node's publish button uses — so create/update/edit-by-form/edit-by-script all converge on one backend op. Returns the merged record. Throws if no record of that type+id is currently loaded in $data. Object property shorthand is supported: `{Name, Role}` means `{Name: Name, Role: Role}` (and `id` means `id: id`), so a patch built from same-named scope variables stays concise.

**Examples:**

```
updateData({type: "Post", id: post.id, patch: {Content: newContent}})
updateData({type: "Traveller", id, patch: {Name, Role, Bio}})
```

### `deleteData` _(async)_

```
deleteData({type: string, id: string | string[]}): void
```

Soft-deletes one record (when `id` is a string) or N records (when `id` is an array of strings) by setting `isDeleted: true`. Records remain in storage with their fields preserved; org-level filters (a `whereClause` on the subsection, or `filter(..., !it.isDeleted)` in a template) hide them from the UI. Cascades through declared parent relations: every loaded record of an object type whose `parent: {type, idField}` points at a deleted record is soft-deleted too, recursively, children before parents — so do NOT filter and delete children by hand when the child type declares `parent`. Only children currently loaded in $data are found, so the child type must be declared as a data source by some node. Restoring a parent does not restore its children. Hard delete is a separate platform concern (#783). Throws if any referenced record is not currently loaded in $data.

**Examples:**

```
deleteData({type: "Post", id: post.id})
deleteData({type: "Photo", id: photos.map((p) => p.id)})
deleteData({type: "Post", id: id}) // Photo declares parent: {type: "Post", idField: "postId"}, so its photos go too
```

### `setRealtime` _(async)_

```
setRealtime(path: string, value: object): {ownerUid: string, ...}
```

Creates or replaces ONE realtime record at `path` (shaped `{Type}/{recordId}`, relative to the org's realtime root), reflecting live to every subscriber of that type. `value` must be an object; it is stamped with your `ownerUid`, and security rules let you write only records you own. Do NOT include an `id` field — the record's id IS the final path segment. Use for fixed-id records (a game room keyed by its code, a player keyed by identity).

**Examples:**

```
setRealtime("Game/" + roomCode, {phase: "lobby", hostId: whoAmI})
setRealtime("Player/" + whoAmI, {name, gameId: roomCode})
```

### `pushRealtime` _(async)_

```
pushRealtime(path: string, value: object): {id: string, ownerUid: string, ...}
```

Appends a NEW realtime record under the collection `path` (shaped `{Type}`) with a server-generated id, reflecting live to every subscriber of that type. `value` must be an object; it is stamped with your `ownerUid`. Returns the record with its new `id` — use it to link related records. Use for append-only collections (chat messages, submissions) where you don't choose the id.

**Examples:**

```
msg = pushRealtime("ChatMessage", {text: comment, gameId: roomCode})
entry = pushRealtime("Drawing", {url: image.url, gameId: roomCode})
```

### `removeRealtimeOnDisconnect` _(async)_

```
removeRealtimeOnDisconnect(path: string): void
```

Registers a server-side rule that DELETES the realtime record at `path` (shaped `{Type}/{recordId}`, relative to the org's realtime root) when this client's connection drops — e.g. the tab closes or the network is lost. Call it right after `setRealtime` creates the record you want auto-cleaned (a player keyed by identity), so a player who leaves vanishes from the live roster instead of stranding it. You may only auto-remove records you own. The deletion is queued by the realtime server and fires on disconnect, not immediately — it is the wrong tool for removing a record right now.

**Examples:**

```
setRealtime("Player/" + pid, {name, gameId: roomCode}); removeRealtimeOnDisconnect("Player/" + pid)
```

### `removeRealtime` _(async)_

```
removeRealtime(path: string): void
```

Immediately DELETES the realtime record at `path` (shaped `{Type}/{recordId}`, relative to the org's realtime root), reflecting live to every subscriber of that type. Unlike `removeRealtimeOnDisconnect` (which fires only when the connection drops), this removes the record right now. Security rules let you delete a record you own, or — for the org's creator — any realtime record in your own org (so an owner can clean up old game rooms). Use for an admin/owner 'delete this room' control.

**Examples:**

```
removeRealtime("Game/" + roomCode)
removeRealtime("ChatMessage/" + msgId)
```

### `advanceFlow` _(async)_

```
advanceFlow(): void
```

Advances the enclosing flow to its next step — and finishes (closes) the flow when called on the last step. Only valid from a Content script (a declared action or a legacy `data-script`) rendered INSIDE a flow; it lets you replace the built-in Next/Finish button with your own control (pair with the flow's `hideNav`/`hideTopBar` options for a chrome-less, custom-driven flow). Advancing into an auto-running step (e.g. a `flowStep:script`) triggers that step, so this is also how a custom 'Submit' button kicks off the flow's final script. Throws if called outside a flow.

**Examples:**

```
advanceFlow()
```

### `leaveVideoRoom` _(async)_

```
leaveVideoRoom(): void
```

Leaves the app's active video call, if one is active. A `videoRoom` node's call outlives screen navigation (multiple nodes can share one call across screens), so leaving is never automatic — call this explicitly wherever a script means for video to actually end, e.g. a 'leave game' or 'back to the start' action. Safe to call even when no call is active (no-op, does not throw).

**Examples:**

```
setAppValue("roomCode", ""); leaveVideoRoom(); navigate("home")
```

### `endVideoRoom` _(async)_

```
endVideoRoom(): void
```

End the video call for EVERYONE in the room, not just this device. Only whoever started the room may do this — the platform refuses anyone else — so gate the control on your own host check too. Unlike leaveVideoRoom, this is final: nobody can rejoin the same room afterwards. Use it for a deliberate 'we're done' at the end of a session; use leaveVideoRoom when one person is stepping out.

**Examples:**

```
endVideoRoom(); navigate("home")
```

### `speak` _(async)_

```
speak(text: string, lang?: string, rate?: number): void
```

Speaks `text` aloud via the device's speech synthesis (the same Web Speech path as the legacy `data-speak` attribute, plus error handling). `lang` accepts a BCP-47 code ("fr-FR") or a common English language name ("French"); `rate` is playback speed 0.1–10. Toggle-aware: calling it with the SAME text while it is still speaking stops playback instead.

**Examples:**

```
speak($params.text, "fr-FR")
speak(story.Original, story.Language, 0.9)
```

### `stopSpeech` _(async)_

```
stopSpeech(): void
```

Stops any in-progress speech synthesis immediately (the legacy `data-speak-action="stop"` behaviour). Safe to call when nothing is speaking — no-op, does not throw.

**Examples:**

```
stopSpeech()
```

### `setValue` _(async)_

```
setValue(value: any): void
```

Writes the content node's OWN value — the node whose action is running — so formulas elsewhere can read it back via the node's name (the legacy `setValue=` attribute's behaviour). Use it for local UI state a content node carries itself (selected tab, filter toggle); for app-level state use `setAppValue` instead.

**Examples:**

```
setValue($params.id)
setValue("")
```

### `setValues` _(async)_

```
setValues(values: {[fieldName: string]: any}): void
```

Writes SEVERAL fields at once, by name, as ONE atomic state update (#407). Each key is a node name resolved from this content node's scope outward — exactly the names a formula here could read — and every value is evaluated against the same state snapshot before any write lands, so `setValues({a: b, b: a})` is a genuine swap with no half-applied render in between. A name nothing in scope declares throws (nothing is written). Use it for any control that must move two or more fields together — swap, reset-to-defaults, apply-a-preset; for one field use `setValue` (own value) or `setAppValue` (app variable).

**Examples:**

```
setValues({myLanguage: otherLanguage, otherLanguage: myLanguage})
setValues({minPrice: 0, maxPrice: 1000, sortBy: "newest"})
```

### `submit` _(async)_

```
submit(): {id: string, ...}
```

Publishes the content node's enclosing submit context object (the legacy `@submit` href behaviour): resolves the surrounding form-like object, publishes it as a record, then writes the server-stamped `id`/`createdAt`/`createdBy` back into the source fields and shows a success snackbar. Returns the published record. Throws when there is no submit context or the publish fails — so a failing `submit()` aborts the action's `navigate` step.

**Examples:**

```
submit()
```

<!-- BEGIN PROMPT-STRIP: host-context-content:data-script -->
## In `content:data-script`

### `publishData` _(async)_

```
publishData({type: string, data: object | object[], scope?: "global" | "user" | "variant" | "group", variant?: string, groupKey?: string}): {id: string, ...} | [{id: string, ...}, ...]
```

Publishes one record (when `data` is an object) or N records (when `data` is an array of objects) of the given object type. Returns the created record(s) with server-stamped `id`, `createdAt`, `createdBy` fields populated. Use the returned `id` to link related records — e.g. stamp a parent's id into each child by including it in the child's object literal. `scope` must match the partition the type is bound at, and defaults to `"global"`: `"user"` writes the signed-in user's own partition, `"variant"` needs a `variant` key, and `"group"` needs a `groupKey` naming which group to write into (a member can be in several at once, so it is never inferred — a group publish with no key is refused rather than falling back to the shared collection).

**Examples:**

```
post = publishData({type: "TravelPost", data: {AuthorId: whoAmI, Details: comment}})
publishData({type: "Photo", data: photos.map((p) => ({Image: p.url, postId: post.id}))})
publishData({type: "Prediction", data: $rows('matchRows').map((r) => ({id: r.id, score: r.score}))})
publishData({type: "CardState", data: {cardId: card.id, box: 2}, scope: "user"})
publishData({type: "Expense", data: {amount: total, paidBy: whoAmI}, scope: "group", groupKey: currentTab})
```

### `createGroup` _(async)_

```
createGroup({groupKey: string, inviteCode?: string}): {groupKey: string, changed: boolean, role: string, addedAt: string}
```

Creates a membership group in this org and enrols the caller as its first `owner`, so they can immediately read and write the group's `scope: "group"` data. Pass an `inviteCode` to mint a shareable join credential at the same time. Idempotent for the owner — calling it again returns the existing membership with `changed: false`, so a flow step the user can re-enter is safe. Another user hitting an existing key is refused. Use this for a "start a new shared thing" step: a trip tab, a household, a team.

**Examples:**

```
tab = createGroup({groupKey: "tab-" + generateId(6), inviteCode: code})
createGroup({groupKey: slug(tripName)})
```

### `joinGroup` _(async)_

```
joinGroup({inviteCode?: string, groupKey?: string, claimEmail?: string}): {groupKey: string, changed: boolean, role: string, addedAt: string, matchedBy?: string}
```

Admits the caller to an existing group so its `scope: "group"` data becomes readable and writable for them. Either an `inviteCode` (the code itself is the credential — enough on its own) or a `groupKey` plus the `claimEmail` the caller was invited under, which is matched against their signed-in identity. Returns `matchedBy` naming which invitation matched, and `changed: false` when they were already a member, so re-running is safe. The caller's account is what gets recorded, so they must be signed in — an invitation can be addressed to an email or handle, but access is keyed on the account that claims it.

**Examples:**

```
joined = joinGroup({inviteCode: enteredCode})
joinGroup({groupKey: $args.tab, claimEmail: myEmail})
```

### `setAppValue` _(async)_

```
setAppValue(key: string, value: any): void
```

Writes an app-level value to the given pointer key (relative to the app root). The value persists across reloads via the existing localStorage AppInstance rail. Use this for 'remember who I am' / 'remember last choice' identity write-back — at the end of a flow, or straight from a Content action's script.

**Examples:**

```
setAppValue("whoAmI", AuthorId)
```

### `navigate` _(async)_

```
navigate(pointerKey: string, args?: object): void
```

Moves the app cursor to the given screen/section pointer key. Both forms push — a nav-stack entry (Back returns to the caller) plus a reset of any flow state under the target, exactly like an `<a>` link. The optional `args` object additionally exposes its values as `$args.<key>` on the destination screen — pair with `byId('Type', $args.id)` on the destination to land on a record you just created. From a content action's script, call it as the last statement — a preceding setAppValue(...) is the preselect-then-navigate idiom.

**Examples:**

```
navigate("home")
navigate("matchDetail", {founderId: newFounder.id})
```

### `replaceScreen` _(async)_

```
replaceScreen(pointerKey: string, args?: object): void
```

Swaps the current screen for the given screen/section pointer key WITHOUT adding a back-stack entry and WITHOUT resetting flow state under the target — Back returns to wherever the caller came from. Use for redirect-style moves (a landing screen that forwards to the right tab). Prefer `navigate` for ordinary drill-down: replacing into a screen that contains a flow re-shows the flow's last completed step instead of a fresh run.

**Examples:**

```
replaceScreen("home")
replaceScreen("tabDetail", {id: $params.id})
```

### `back` _(async)_

```
back(): void
```

Goes back one nav-stack entry — exactly what the Back button (or a legacy `href="@pop"`) does. Takes no arguments. A Back/Cancel control in a content template is an action whose script is just `back()`.

**Examples:**

```
back()
```

### `updateData` _(async)_

```
updateData({type: string, id: string, patch: object}): {id: string, ...}
```

Partial-updates an existing record by id. Reads the current record from $data, shallow-merges `patch` over it, and writes back via the same path the Form node's publish button uses — so create/update/edit-by-form/edit-by-script all converge on one backend op. Returns the merged record. Throws if no record of that type+id is currently loaded in $data. Object property shorthand is supported: `{Name, Role}` means `{Name: Name, Role: Role}` (and `id` means `id: id`), so a patch built from same-named scope variables stays concise.

**Examples:**

```
updateData({type: "Post", id: post.id, patch: {Content: newContent}})
updateData({type: "Traveller", id, patch: {Name, Role, Bio}})
```

### `deleteData` _(async)_

```
deleteData({type: string, id: string | string[]}): void
```

Soft-deletes one record (when `id` is a string) or N records (when `id` is an array of strings) by setting `isDeleted: true`. Records remain in storage with their fields preserved; org-level filters (a `whereClause` on the subsection, or `filter(..., !it.isDeleted)` in a template) hide them from the UI. Cascades through declared parent relations: every loaded record of an object type whose `parent: {type, idField}` points at a deleted record is soft-deleted too, recursively, children before parents — so do NOT filter and delete children by hand when the child type declares `parent`. Only children currently loaded in $data are found, so the child type must be declared as a data source by some node. Restoring a parent does not restore its children. Hard delete is a separate platform concern (#783). Throws if any referenced record is not currently loaded in $data.

**Examples:**

```
deleteData({type: "Post", id: post.id})
deleteData({type: "Photo", id: photos.map((p) => p.id)})
deleteData({type: "Post", id: id}) // Photo declares parent: {type: "Post", idField: "postId"}, so its photos go too
```

### `setRealtime` _(async)_

```
setRealtime(path: string, value: object): {ownerUid: string, ...}
```

Creates or replaces ONE realtime record at `path` (shaped `{Type}/{recordId}`, relative to the org's realtime root), reflecting live to every subscriber of that type. `value` must be an object; it is stamped with your `ownerUid`, and security rules let you write only records you own. Do NOT include an `id` field — the record's id IS the final path segment. Use for fixed-id records (a game room keyed by its code, a player keyed by identity).

**Examples:**

```
setRealtime("Game/" + roomCode, {phase: "lobby", hostId: whoAmI})
setRealtime("Player/" + whoAmI, {name, gameId: roomCode})
```

### `pushRealtime` _(async)_

```
pushRealtime(path: string, value: object): {id: string, ownerUid: string, ...}
```

Appends a NEW realtime record under the collection `path` (shaped `{Type}`) with a server-generated id, reflecting live to every subscriber of that type. `value` must be an object; it is stamped with your `ownerUid`. Returns the record with its new `id` — use it to link related records. Use for append-only collections (chat messages, submissions) where you don't choose the id.

**Examples:**

```
msg = pushRealtime("ChatMessage", {text: comment, gameId: roomCode})
entry = pushRealtime("Drawing", {url: image.url, gameId: roomCode})
```

### `removeRealtimeOnDisconnect` _(async)_

```
removeRealtimeOnDisconnect(path: string): void
```

Registers a server-side rule that DELETES the realtime record at `path` (shaped `{Type}/{recordId}`, relative to the org's realtime root) when this client's connection drops — e.g. the tab closes or the network is lost. Call it right after `setRealtime` creates the record you want auto-cleaned (a player keyed by identity), so a player who leaves vanishes from the live roster instead of stranding it. You may only auto-remove records you own. The deletion is queued by the realtime server and fires on disconnect, not immediately — it is the wrong tool for removing a record right now.

**Examples:**

```
setRealtime("Player/" + pid, {name, gameId: roomCode}); removeRealtimeOnDisconnect("Player/" + pid)
```

### `removeRealtime` _(async)_

```
removeRealtime(path: string): void
```

Immediately DELETES the realtime record at `path` (shaped `{Type}/{recordId}`, relative to the org's realtime root), reflecting live to every subscriber of that type. Unlike `removeRealtimeOnDisconnect` (which fires only when the connection drops), this removes the record right now. Security rules let you delete a record you own, or — for the org's creator — any realtime record in your own org (so an owner can clean up old game rooms). Use for an admin/owner 'delete this room' control.

**Examples:**

```
removeRealtime("Game/" + roomCode)
removeRealtime("ChatMessage/" + msgId)
```

### `advanceFlow` _(async)_

```
advanceFlow(): void
```

Advances the enclosing flow to its next step — and finishes (closes) the flow when called on the last step. Only valid from a Content script (a declared action or a legacy `data-script`) rendered INSIDE a flow; it lets you replace the built-in Next/Finish button with your own control (pair with the flow's `hideNav`/`hideTopBar` options for a chrome-less, custom-driven flow). Advancing into an auto-running step (e.g. a `flowStep:script`) triggers that step, so this is also how a custom 'Submit' button kicks off the flow's final script. Throws if called outside a flow.

**Examples:**

```
advanceFlow()
```

### `leaveVideoRoom` _(async)_

```
leaveVideoRoom(): void
```

Leaves the app's active video call, if one is active. A `videoRoom` node's call outlives screen navigation (multiple nodes can share one call across screens), so leaving is never automatic — call this explicitly wherever a script means for video to actually end, e.g. a 'leave game' or 'back to the start' action. Safe to call even when no call is active (no-op, does not throw).

**Examples:**

```
setAppValue("roomCode", ""); leaveVideoRoom(); navigate("home")
```

### `endVideoRoom` _(async)_

```
endVideoRoom(): void
```

End the video call for EVERYONE in the room, not just this device. Only whoever started the room may do this — the platform refuses anyone else — so gate the control on your own host check too. Unlike leaveVideoRoom, this is final: nobody can rejoin the same room afterwards. Use it for a deliberate 'we're done' at the end of a session; use leaveVideoRoom when one person is stepping out.

**Examples:**

```
endVideoRoom(); navigate("home")
```

<!-- END PROMPT-STRIP: host-context-content:data-script -->
## In `flowStep:script`

### `publishData` _(async)_

```
publishData({type: string, data: object | object[], scope?: "global" | "user" | "variant" | "group", variant?: string, groupKey?: string}): {id: string, ...} | [{id: string, ...}, ...]
```

Publishes one record (when `data` is an object) or N records (when `data` is an array of objects) of the given object type. Returns the created record(s) with server-stamped `id`, `createdAt`, `createdBy` fields populated. Use the returned `id` to link related records — e.g. stamp a parent's id into each child by including it in the child's object literal. `scope` must match the partition the type is bound at, and defaults to `"global"`: `"user"` writes the signed-in user's own partition, `"variant"` needs a `variant` key, and `"group"` needs a `groupKey` naming which group to write into (a member can be in several at once, so it is never inferred — a group publish with no key is refused rather than falling back to the shared collection).

**Examples:**

```
post = publishData({type: "TravelPost", data: {AuthorId: whoAmI, Details: comment}})
publishData({type: "Photo", data: photos.map((p) => ({Image: p.url, postId: post.id}))})
publishData({type: "Prediction", data: $rows('matchRows').map((r) => ({id: r.id, score: r.score}))})
publishData({type: "CardState", data: {cardId: card.id, box: 2}, scope: "user"})
publishData({type: "Expense", data: {amount: total, paidBy: whoAmI}, scope: "group", groupKey: currentTab})
```

### `createGroup` _(async)_

```
createGroup({groupKey: string, inviteCode?: string}): {groupKey: string, changed: boolean, role: string, addedAt: string}
```

Creates a membership group in this org and enrols the caller as its first `owner`, so they can immediately read and write the group's `scope: "group"` data. Pass an `inviteCode` to mint a shareable join credential at the same time. Idempotent for the owner — calling it again returns the existing membership with `changed: false`, so a flow step the user can re-enter is safe. Another user hitting an existing key is refused. Use this for a "start a new shared thing" step: a trip tab, a household, a team.

**Examples:**

```
tab = createGroup({groupKey: "tab-" + generateId(6), inviteCode: code})
createGroup({groupKey: slug(tripName)})
```

### `joinGroup` _(async)_

```
joinGroup({inviteCode?: string, groupKey?: string, claimEmail?: string}): {groupKey: string, changed: boolean, role: string, addedAt: string, matchedBy?: string}
```

Admits the caller to an existing group so its `scope: "group"` data becomes readable and writable for them. Either an `inviteCode` (the code itself is the credential — enough on its own) or a `groupKey` plus the `claimEmail` the caller was invited under, which is matched against their signed-in identity. Returns `matchedBy` naming which invitation matched, and `changed: false` when they were already a member, so re-running is safe. The caller's account is what gets recorded, so they must be signed in — an invitation can be addressed to an email or handle, but access is keyed on the account that claims it.

**Examples:**

```
joined = joinGroup({inviteCode: enteredCode})
joinGroup({groupKey: $args.tab, claimEmail: myEmail})
```

### `setAppValue` _(async)_

```
setAppValue(key: string, value: any): void
```

Writes an app-level value to the given pointer key (relative to the app root). The value persists across reloads via the existing localStorage AppInstance rail. Use this for 'remember who I am' / 'remember last choice' identity write-back — at the end of a flow, or straight from a Content action's script.

**Examples:**

```
setAppValue("whoAmI", AuthorId)
```

### `navigate` _(async)_

```
navigate(pointerKey: string, args?: object): void
```

Moves the app cursor to the given screen/section pointer key. Both forms push — a nav-stack entry (Back returns to the caller) plus a reset of any flow state under the target, exactly like an `<a>` link. The optional `args` object additionally exposes its values as `$args.<key>` on the destination screen — pair with `byId('Type', $args.id)` on the destination to land on a record you just created. From a content action's script, call it as the last statement — a preceding setAppValue(...) is the preselect-then-navigate idiom.

**Examples:**

```
navigate("home")
navigate("matchDetail", {founderId: newFounder.id})
```

### `replaceScreen` _(async)_

```
replaceScreen(pointerKey: string, args?: object): void
```

Swaps the current screen for the given screen/section pointer key WITHOUT adding a back-stack entry and WITHOUT resetting flow state under the target — Back returns to wherever the caller came from. Use for redirect-style moves (a landing screen that forwards to the right tab). Prefer `navigate` for ordinary drill-down: replacing into a screen that contains a flow re-shows the flow's last completed step instead of a fresh run.

**Examples:**

```
replaceScreen("home")
replaceScreen("tabDetail", {id: $params.id})
```

### `back` _(async)_

```
back(): void
```

Goes back one nav-stack entry — exactly what the Back button (or a legacy `href="@pop"`) does. Takes no arguments. A Back/Cancel control in a content template is an action whose script is just `back()`.

**Examples:**

```
back()
```

### `updateData` _(async)_

```
updateData({type: string, id: string, patch: object}): {id: string, ...}
```

Partial-updates an existing record by id. Reads the current record from $data, shallow-merges `patch` over it, and writes back via the same path the Form node's publish button uses — so create/update/edit-by-form/edit-by-script all converge on one backend op. Returns the merged record. Throws if no record of that type+id is currently loaded in $data. Object property shorthand is supported: `{Name, Role}` means `{Name: Name, Role: Role}` (and `id` means `id: id`), so a patch built from same-named scope variables stays concise.

**Examples:**

```
updateData({type: "Post", id: post.id, patch: {Content: newContent}})
updateData({type: "Traveller", id, patch: {Name, Role, Bio}})
```

### `deleteData` _(async)_

```
deleteData({type: string, id: string | string[]}): void
```

Soft-deletes one record (when `id` is a string) or N records (when `id` is an array of strings) by setting `isDeleted: true`. Records remain in storage with their fields preserved; org-level filters (a `whereClause` on the subsection, or `filter(..., !it.isDeleted)` in a template) hide them from the UI. Cascades through declared parent relations: every loaded record of an object type whose `parent: {type, idField}` points at a deleted record is soft-deleted too, recursively, children before parents — so do NOT filter and delete children by hand when the child type declares `parent`. Only children currently loaded in $data are found, so the child type must be declared as a data source by some node. Restoring a parent does not restore its children. Hard delete is a separate platform concern (#783). Throws if any referenced record is not currently loaded in $data.

**Examples:**

```
deleteData({type: "Post", id: post.id})
deleteData({type: "Photo", id: photos.map((p) => p.id)})
deleteData({type: "Post", id: id}) // Photo declares parent: {type: "Post", idField: "postId"}, so its photos go too
```

### `setRealtime` _(async)_

```
setRealtime(path: string, value: object): {ownerUid: string, ...}
```

Creates or replaces ONE realtime record at `path` (shaped `{Type}/{recordId}`, relative to the org's realtime root), reflecting live to every subscriber of that type. `value` must be an object; it is stamped with your `ownerUid`, and security rules let you write only records you own. Do NOT include an `id` field — the record's id IS the final path segment. Use for fixed-id records (a game room keyed by its code, a player keyed by identity).

**Examples:**

```
setRealtime("Game/" + roomCode, {phase: "lobby", hostId: whoAmI})
setRealtime("Player/" + whoAmI, {name, gameId: roomCode})
```

### `pushRealtime` _(async)_

```
pushRealtime(path: string, value: object): {id: string, ownerUid: string, ...}
```

Appends a NEW realtime record under the collection `path` (shaped `{Type}`) with a server-generated id, reflecting live to every subscriber of that type. `value` must be an object; it is stamped with your `ownerUid`. Returns the record with its new `id` — use it to link related records. Use for append-only collections (chat messages, submissions) where you don't choose the id.

**Examples:**

```
msg = pushRealtime("ChatMessage", {text: comment, gameId: roomCode})
entry = pushRealtime("Drawing", {url: image.url, gameId: roomCode})
```

### `removeRealtimeOnDisconnect` _(async)_

```
removeRealtimeOnDisconnect(path: string): void
```

Registers a server-side rule that DELETES the realtime record at `path` (shaped `{Type}/{recordId}`, relative to the org's realtime root) when this client's connection drops — e.g. the tab closes or the network is lost. Call it right after `setRealtime` creates the record you want auto-cleaned (a player keyed by identity), so a player who leaves vanishes from the live roster instead of stranding it. You may only auto-remove records you own. The deletion is queued by the realtime server and fires on disconnect, not immediately — it is the wrong tool for removing a record right now.

**Examples:**

```
setRealtime("Player/" + pid, {name, gameId: roomCode}); removeRealtimeOnDisconnect("Player/" + pid)
```

### `removeRealtime` _(async)_

```
removeRealtime(path: string): void
```

Immediately DELETES the realtime record at `path` (shaped `{Type}/{recordId}`, relative to the org's realtime root), reflecting live to every subscriber of that type. Unlike `removeRealtimeOnDisconnect` (which fires only when the connection drops), this removes the record right now. Security rules let you delete a record you own, or — for the org's creator — any realtime record in your own org (so an owner can clean up old game rooms). Use for an admin/owner 'delete this room' control.

**Examples:**

```
removeRealtime("Game/" + roomCode)
removeRealtime("ChatMessage/" + msgId)
```

### `leaveVideoRoom` _(async)_

```
leaveVideoRoom(): void
```

Leaves the app's active video call, if one is active. A `videoRoom` node's call outlives screen navigation (multiple nodes can share one call across screens), so leaving is never automatic — call this explicitly wherever a script means for video to actually end, e.g. a 'leave game' or 'back to the start' action. Safe to call even when no call is active (no-op, does not throw).

**Examples:**

```
setAppValue("roomCode", ""); leaveVideoRoom(); navigate("home")
```

### `endVideoRoom` _(async)_

```
endVideoRoom(): void
```

End the video call for EVERYONE in the room, not just this device. Only whoever started the room may do this — the platform refuses anyone else — so gate the control on your own host check too. Unlike leaveVideoRoom, this is final: nobody can rejoin the same room afterwards. Use it for a deliberate 'we're done' at the end of a session; use leaveVideoRoom when one person is stepping out.

**Examples:**

```
endVideoRoom(); navigate("home")
```
