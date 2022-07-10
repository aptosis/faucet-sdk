/**
 * A coin faucet for the Aptos devnet.
 *
 * **Module ID:** `0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::Faucet`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** Faucet configuration. */
export type FaucetConfigurationData = {
  /** Signer capability of the Faucet address. */
  signer_cap: {
    account: p.RawAddress;
  };

  /** Address which will become the Mint Wrapper Minter. */
  minter: p.RawAddress;
};

/**
 * Payload arguments for {@link entry.initialize}.
 */
export type InitializePayload = {
  args: {
    /** IDL type: `Address` */
    minter: p.RawAddress;
  };
};

export * as entry from "./entry.js";
export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS =
  "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98" as const;
/** The full module name. */
export const FULL_NAME =
  "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::Faucet" as const;
/** The name of the module. */
export const NAME = "Faucet" as const;

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
    "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::Faucet::FaucetConfiguration",
} as const;

/** All struct types. */
export const structs = {
  FaucetConfiguration:
    "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::Faucet::FaucetConfiguration",
} as const;

/** Payload generators for module `0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::Faucet`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/** A coin faucet for the Aptos devnet. */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98",
  "Faucet"
> as typeof moduleImpl;
