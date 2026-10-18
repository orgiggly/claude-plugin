// Resolve hook (see orgpack-register.mjs): the bare specifier
// `@orgiggly/orgpack` → the harness bundle beside this file. Everything else
// goes to Node's own resolver. (#2465)
const SPECIFIER = "@orgiggly/orgpack";
const bundle = new URL("./orgpack.mjs", import.meta.url).href;

export const resolve = (specifier, context, nextResolve) =>
  specifier === SPECIFIER
    ? { url: bundle, shortCircuit: true }
    : nextResolve(specifier, context);
