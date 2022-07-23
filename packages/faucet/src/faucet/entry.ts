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
    "0x10cf22de3cef0a6ef68b2da43e1d20c189c033c93a8503a40ee06c0347a11ea0::faucet::initialize",
  type_arguments: [],
  arguments: [p.serializers.hexString(args.minter)],
});
