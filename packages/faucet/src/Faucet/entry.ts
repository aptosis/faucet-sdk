/**
 * Entrypoint builders.
 *
 * @module
 */
import * as p from "@movingco/prelude";

import type * as mod from "./index.js";
import type * as payloads from "./payloads.js";
/** Initializes the [Faucet]. */
export const initialize = ({
  args,
}: mod.InitializeArgs): payloads.Initialize => ({
  type: "script_function_payload",
  function:
    "0x6fdf5c5cf431d5db75b2b53f0df8aa6687056d47ea7a588e9c512dd2b7a810a8::Faucet::initialize",
  type_arguments: [],
  arguments: [p.serializers.hexString(args.minter)],
});
