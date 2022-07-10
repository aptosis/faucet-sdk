/**
 * Entrypoint builders.
 *
 * @module
 */
import * as p from "@movingco/prelude";

import type * as mod from "./index.js";
/** Initializes the [Faucet]. */
export const initialize = ({
  args,
}: mod.InitializePayload): p.ScriptFunctionPayload => ({
  type: "script_function_payload",
  function:
    "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::Faucet::initialize",
  type_arguments: [],
  arguments: [p.serializers.hexString(args.minter)],
});
