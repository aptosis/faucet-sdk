/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id:
    "0x6fdf5c5cf431d5db75b2b53f0df8aa6687056d47ea7a588e9c512dd2b7a810a8::Faucet",
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
      name: "0x6fdf5c5cf431d5db75b2b53f0df8aa6687056d47ea7a588e9c512dd2b7a810a8::Faucet::FaucetConfiguration",
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
