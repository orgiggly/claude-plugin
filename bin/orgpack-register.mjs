// Passed to `node --test --import` by `og test`: installs the resolve hook that
// gives a user's test file its `import … from "@orgiggly/orgpack"` line. Kept
// to `module.register()` (stable since Node 20.6) rather than the newer
// synchronous `registerHooks`, which a Node 22.14 user does not have. (#2465)
import { register } from "node:module";

register("./orgpack-hooks.mjs", import.meta.url);
