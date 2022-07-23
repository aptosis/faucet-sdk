/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id:
    "0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::mw_entry",
  doc: "Entry functions for the mint_wrapper.",
  functions: [
    {
      name: "mint",
      doc: "Mints coins from the mint_wrapper on behalf of the mint_wrapper's authority.",
      ty_args: ["CoinType"],
      args: [
        { name: "recipient", ty: "address" },
        { name: "amount", ty: "u64" },
      ],
    },
    {
      name: "accept_minter",
      doc: "Accepts the minter if possible.",
      ty_args: ["CoinType"],
      args: [{ name: "base", ty: "address" }],
    },
    {
      name: "accept_owner",
      doc: "Accepts the owner.",
      ty_args: ["CoinType"],
      args: [{ name: "base", ty: "address" }],
    },
    {
      name: "create_with_coin",
      doc: "Creates a new coin and mint_wrapper.\nThe given account also becomes the mint_wrapper's base.",
      ty_args: ["CoinType"],
      args: [
        { name: "name", ty: { vector: "u8" } },
        { name: "decimals", ty: "u64" },
        { name: "hard_cap", ty: "u64" },
      ],
    },
    {
      name: "offer_minter",
      doc: "Creates a new minter with the given allowance, offering it.",
      ty_args: ["CoinType"],
      args: [
        { name: "destination", ty: "address" },
        { name: "allowance", ty: "u64" },
      ],
    },
    {
      name: "offer_owner",
      doc: "Offers the owner.",
      ty_args: ["CoinType"],
      args: [{ name: "recipient", ty: "address" }],
    },
  ],
  structs: [],
  errors: {},
} as const;
