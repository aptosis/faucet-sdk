/**
 * Entrypoint builders.
 *
 * @module
 */
import * as p from "@movingco/prelude";

import type * as mod from "./index.js";
/** Mints coins from the mint_wrapper on behalf of the mint_wrapper's authority. */
export const mint = ({
  args,
  typeArgs,
}: mod.MintPayload): p.ScriptFunctionPayload => ({
  type: "script_function_payload",
  function:
    "0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::Entry::mint",
  type_arguments: [typeArgs.CoinType],
  arguments: [
    p.serializers.hexString(args.recipient),
    p.serializers.u64(args.amount),
  ],
});

/** Accepts the minter if possible. */
export const accept_minter = ({
  args,
  typeArgs,
}: mod.AcceptMinterPayload): p.ScriptFunctionPayload => ({
  type: "script_function_payload",
  function:
    "0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::Entry::accept_minter",
  type_arguments: [typeArgs.CoinType],
  arguments: [p.serializers.hexString(args.base)],
});

/** Accepts the owner. */
export const accept_owner = ({
  args,
  typeArgs,
}: mod.AcceptOwnerPayload): p.ScriptFunctionPayload => ({
  type: "script_function_payload",
  function:
    "0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::Entry::accept_owner",
  type_arguments: [typeArgs.CoinType],
  arguments: [p.serializers.hexString(args.base)],
});

/**
 * Creates a new coin and mint_wrapper.
 * The given account also becomes the MintWrapper's base.
 */
export const create_with_coin = ({
  args,
  typeArgs,
}: mod.CreateWithCoinPayload): p.ScriptFunctionPayload => ({
  type: "script_function_payload",
  function:
    "0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::Entry::create_with_coin",
  type_arguments: [typeArgs.CoinType],
  arguments: [
    p.serializers.hexString(args.name),
    p.serializers.u64(args.decimals),
    p.serializers.u64(args.hard_cap),
  ],
});

/** Creates a new minter with the given allowance, offering it. */
export const offer_minter = ({
  args,
  typeArgs,
}: mod.OfferMinterPayload): p.ScriptFunctionPayload => ({
  type: "script_function_payload",
  function:
    "0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::Entry::offer_minter",
  type_arguments: [typeArgs.CoinType],
  arguments: [
    p.serializers.hexString(args.destination),
    p.serializers.u64(args.allowance),
  ],
});

/** Offers the owner. */
export const offer_owner = ({
  args,
  typeArgs,
}: mod.OfferOwnerPayload): p.ScriptFunctionPayload => ({
  type: "script_function_payload",
  function:
    "0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::Entry::offer_owner",
  type_arguments: [typeArgs.CoinType],
  arguments: [p.serializers.hexString(args.recipient)],
});
