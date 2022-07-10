/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id:
    "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::Faucet",
  doc: "A coin faucet for the Aptos devnet.",
  functions: [
    {
      name: "initialize",
      doc: "Initializes the [Faucet].",
      ty_args: [],
      args: [{ name: "minter", ty: "address" }],
    },
  ],
  structs: [
    {
      name: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::Faucet::FaucetConfiguration",
      doc: "Faucet configuration.",
      fields: [
        {
          name: "signer_cap",
          doc: "Signer capability of the Faucet address.",
          ty: { struct: { name: "0x1::Account::SignerCapability" } },
        },
        {
          name: "minter",
          doc: "Address which will become the Mint Wrapper Minter.",
          ty: "address",
        },
      ],
      abilities: ["key"],
    },
  ],
  errors: {},
} as const;
