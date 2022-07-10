/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id:
    "0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::MintWrapper",
  doc: "Allows delegating the minting of coins to multiple addresses.\n\nA `MintWrapper` can be created for any coin.\n\nThere are two roles one can possess with a `MintWrapper`:\n- **Owners**, which can create and delete Minters\n- **Minters**, which can mint coins to any address",
  functions: [],
  structs: [
    {
      name: "0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::MintWrapper::MintWrapper",
      doc: "Holds the mint/burn capabilities.",
      fields: [
        {
          name: "mint_capability",
          doc: "The capability to mint `CoinType`.",
          ty: {
            struct: {
              name: "0x1::Coin::MintCapability",
              ty_args: [{ type_param: 0 }],
            },
          },
        },
        {
          name: "burn_capability",
          doc: "The capability to burn `CoinType`.",
          ty: {
            struct: {
              name: "0x1::Coin::BurnCapability",
              ty_args: [{ type_param: 0 }],
            },
          },
        },
        {
          name: "hard_cap",
          doc: "Optional hard cap of the amount of coins that may be issued.",
          ty: "u64",
        },
      ],
      type_params: ["CoinType"],
      abilities: ["key"],
    },
    {
      name: "0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::MintWrapper::Minter",
      doc: "Capability to mint at the mint_wrapper of the given coin.",
      fields: [
        {
          name: "mint_capability",
          doc: "Mint capability for this Minter.",
          ty: {
            struct: {
              name: "0x1::Coin::MintCapability",
              ty_args: [{ type_param: 0 }],
            },
          },
        },
        {
          name: "allowance",
          doc: "Maximum amount that this [Minter] can mint.",
          ty: "u64",
        },
      ],
      type_params: ["CoinType"],
      abilities: ["store", "key"],
    },
    {
      name: "0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::MintWrapper::MinterOffers",
      doc: "Container for holding minters which are to be transferred to someone.",
      fields: [
        {
          name: "offers",
          doc: "Minters being offered.",
          ty: {
            struct: {
              name: "0x1::Table::Table",
              ty_args: [
                "address",
                {
                  struct: {
                    name: "0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::MintWrapper::Minter",
                    ty_args: [{ type_param: 0 }],
                  },
                },
              ],
            },
          },
        },
      ],
      type_params: ["CoinType"],
      abilities: ["key"],
    },
    {
      name: "0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::MintWrapper::Owner",
      doc: "Having this permission allows one to create and delete minters.",
      fields: [
        {
          name: "base",
          doc: "Where the mint wrapper is stored.",
          ty: "address",
        },
      ],
      type_params: ["CoinType"],
      abilities: ["store", "key"],
    },
  ],
  errors: {
    "1": { name: "ENOT_OWNER", doc: "Must be the owner of the mint wrapper." },
    "2": {
      name: "ENOT_MINTER",
      doc: "You do not have the minter privilege for this mint wrapper.",
    },
    "3": { name: "EINSUFFICIENT_ALLOWANCE", doc: "Allowance exceeded." },
  },
} as const;
