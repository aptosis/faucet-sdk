/**
 * Allows delegating the minting of coins to multiple addresses.
 *
 * A `MintWrapper` can be created for any coin.
 *
 * There are two roles one can possess with a `MintWrapper`:
 * - **Owners**, which can create and delete Minters
 * - **Minters**, which can mint coins to any address
 *
 * **Module ID:** `0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::mint_wrapper`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/**
 * Holds the mint/burn capabilities.
 *
 * Type name: `0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::mint_wrapper::MintWrapper`
 */
export interface IMintWrapper {
  /** The capability to mint `CoinType`. */
  mint_capability: {
    dummy_field: boolean;
  };

  /** The capability to burn `CoinType`. */
  burn_capability: {
    dummy_field: boolean;
  };

  /** Optional hard cap of the amount of coins that may be issued. */
  hard_cap: p.U64;
}

/**
 * Capability to mint at the mint_wrapper of the given coin.
 *
 * Type name: `0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::mint_wrapper::Minter`
 */
export interface IMinter {
  /** Mint capability for this Minter. */
  mint_capability: {
    dummy_field: boolean;
  };

  /** Maximum amount that this [Minter] can mint. */
  allowance: p.U64;
}

/**
 * Container for holding minters which are to be transferred to someone.
 *
 * Type name: `0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::mint_wrapper::MinterOffers`
 */
export interface IMinterOffers {
  /** Minters being offered. */
  offers: {
    handle: p.U128;
    length: p.U64;
  };
}

/**
 * Having this permission allows one to create and delete minters.
 *
 * Type name: `0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::mint_wrapper::Owner`
 */
export interface IOwner {
  /** Where the mint wrapper is stored. */
  base: p.RawAddress;
}

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS =
  "0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c" as const;
/** The full module name. */
export const FULL_NAME =
  "0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::mint_wrapper" as const;
/** The name of the module. */
export const NAME = "mint_wrapper" as const;

/** Module ID information. */
export const id = {
  ADDRESS,
  FULL_NAME,
  NAME,
} as const;

export * as errors from "./errors.js";

/** Module error codes. */
export const errorCodes = {
  "1": {
    name: "ENOT_OWNER",
    doc: "Must be the owner of the mint wrapper.",
  },
  "2": {
    name: "ENOT_MINTER",
    doc: "You do not have the minter privilege for this mint wrapper.",
  },
  "3": {
    name: "EINSUFFICIENT_ALLOWANCE",
    doc: "Allowance exceeded.",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {
  MintWrapper:
    "0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::mint_wrapper::MintWrapper",
  Minter:
    "0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::mint_wrapper::Minter",
  MinterOffers:
    "0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::mint_wrapper::MinterOffers",
  Owner:
    "0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::mint_wrapper::Owner",
} as const;

/** All struct types. */
export const structs = {
  MintWrapper:
    "0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::mint_wrapper::MintWrapper",
  Minter:
    "0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::mint_wrapper::Minter",
  MinterOffers:
    "0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::mint_wrapper::MinterOffers",
  Owner:
    "0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::mint_wrapper::Owner",
} as const;

/** Payload generators for module `0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::mint_wrapper`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/**
 * Allows delegating the minting of coins to multiple addresses.
 *
 * A `MintWrapper` can be created for any coin.
 *
 * There are two roles one can possess with a `MintWrapper`:
 * - **Owners**, which can create and delete Minters
 * - **Minters**, which can mint coins to any address
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c",
  "mint_wrapper"
> as typeof moduleImpl;
