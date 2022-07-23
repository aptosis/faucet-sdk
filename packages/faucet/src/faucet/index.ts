/**
 * A coin faucet for the Aptos devnet.
 *
 * # Setup
 *
 * To update this repo, run `cargo run --bin setup && ./scripts/init_tokens.sh`.
 *
 * **Module ID:** `0x2522bca997f581b007c8977992f4e38cd756bf11fc263d29a4275b703259a21a::faucet`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/**
 * Faucet configuration.
 *
 * Type name: `0x2522bca997f581b007c8977992f4e38cd756bf11fc263d29a4275b703259a21a::faucet::FaucetConfiguration`
 */
export interface IFaucetConfiguration {
  /** Signer capability of the Faucet address. */
  signer_cap: {
    account: p.RawAddress;
  };

  /** Address which will become the Mint Wrapper Minter. */
  minter: p.RawAddress;
}

/** Payload arguments for {@link entry.initialize}. */
export type InitializeArgs = {
  args: {
    /** IDL type: `Address` */
    minter: p.RawAddress;
  };
};

export * as entry from "./entry.js";
export * as entryNames from "./entryNames.js";
export { idl } from "./idl.js";
export * as payloads from "./payloads.js";

/** The address of the module. */
export const ADDRESS =
  "0x2522bca997f581b007c8977992f4e38cd756bf11fc263d29a4275b703259a21a" as const;
/** The full module name. */
export const FULL_NAME =
  "0x2522bca997f581b007c8977992f4e38cd756bf11fc263d29a4275b703259a21a::faucet" as const;
/** The name of the module. */
export const NAME = "faucet" as const;

/** Module ID information. */
export const id = {
  ADDRESS,
  FULL_NAME,
  NAME,
} as const;

/** Module error codes. */
export const errorCodes = {} as const;

/** All module function IDLs. */
export const functions = {
  initialize: {
    name: "initialize",
    doc: "Initializes the [Faucet].",
    ty_args: [],
    args: [
      {
        name: "minter",
        ty: "address",
      },
    ],
  },
} as const;

/** All struct types with ability `key`. */
export const resources = {
  FaucetConfiguration:
    "0x2522bca997f581b007c8977992f4e38cd756bf11fc263d29a4275b703259a21a::faucet::FaucetConfiguration",
} as const;

/** All struct types. */
export const structs = {
  FaucetConfiguration:
    "0x2522bca997f581b007c8977992f4e38cd756bf11fc263d29a4275b703259a21a::faucet::FaucetConfiguration",
} as const;

/** Payload generators for module `0x2522bca997f581b007c8977992f4e38cd756bf11fc263d29a4275b703259a21a::faucet`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/**
 * A coin faucet for the Aptos devnet.
 *
 * # Setup
 *
 * To update this repo, run `cargo run --bin setup && ./scripts/init_tokens.sh`.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x2522bca997f581b007c8977992f4e38cd756bf11fc263d29a4275b703259a21a",
  "faucet"
> as typeof moduleImpl;
