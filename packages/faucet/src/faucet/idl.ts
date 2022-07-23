/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id:
    "0x10cf22de3cef0a6ef68b2da43e1d20c189c033c93a8503a40ee06c0347a11ea0::faucet",
  doc: "A coin faucet for the Aptos devnet.\n\n# Setup\n\nTo update this repo, run `cargo run --bin setup && ./scripts/init_tokens.sh`.",
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
      name: "0x10cf22de3cef0a6ef68b2da43e1d20c189c033c93a8503a40ee06c0347a11ea0::faucet::FaucetConfiguration",
      doc: "Faucet configuration.",
      fields: [
        {
          name: "signer_cap",
          doc: "Signer capability of the Faucet address.",
          ty: { struct: { name: "0x1::account::SignerCapability" } },
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
