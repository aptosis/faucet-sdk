/**
 * Entrypoint script function payloads.
 *
 * @module
 */

/**
 * Script function payload for `0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::Entry::mint`.
 *
 * Mints coins from the mint_wrapper on behalf of the mint_wrapper's authority.
 */
export type Mint = {
  readonly type: "script_function_payload";
  readonly function: "0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::Entry::mint";
  readonly arguments: [recipient: string, amount: string];
  readonly type_arguments: [CoinType: string];
};

/**
 * Script function payload for `0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::Entry::accept_minter`.
 *
 * Accepts the minter if possible.
 */
export type AcceptMinter = {
  readonly type: "script_function_payload";
  readonly function: "0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::Entry::accept_minter";
  readonly arguments: [base: string];
  readonly type_arguments: [CoinType: string];
};

/**
 * Script function payload for `0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::Entry::accept_owner`.
 *
 * Accepts the owner.
 */
export type AcceptOwner = {
  readonly type: "script_function_payload";
  readonly function: "0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::Entry::accept_owner";
  readonly arguments: [base: string];
  readonly type_arguments: [CoinType: string];
};

/**
 * Script function payload for `0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::Entry::create_with_coin`.
 *
 * Creates a new coin and mint_wrapper.
 * The given account also becomes the MintWrapper's base.
 */
export type CreateWithCoin = {
  readonly type: "script_function_payload";
  readonly function: "0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::Entry::create_with_coin";
  readonly arguments: [name: string, decimals: string, hard_cap: string];
  readonly type_arguments: [CoinType: string];
};

/**
 * Script function payload for `0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::Entry::offer_minter`.
 *
 * Creates a new minter with the given allowance, offering it.
 */
export type OfferMinter = {
  readonly type: "script_function_payload";
  readonly function: "0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::Entry::offer_minter";
  readonly arguments: [destination: string, allowance: string];
  readonly type_arguments: [CoinType: string];
};

/**
 * Script function payload for `0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::Entry::offer_owner`.
 *
 * Offers the owner.
 */
export type OfferOwner = {
  readonly type: "script_function_payload";
  readonly function: "0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::Entry::offer_owner";
  readonly arguments: [recipient: string];
  readonly type_arguments: [CoinType: string];
};
