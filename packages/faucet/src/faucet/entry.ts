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
    "0x2522bca997f581b007c8977992f4e38cd756bf11fc263d29a4275b703259a21a::faucet::initialize",
  type_arguments: [],
  arguments: [p.serializers.hexString(args.minter)],
});
