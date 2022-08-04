/**
 * Entry functions for the mint_wrapper.
 *
 * **Module ID:** `0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::mw_entry`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** Payload arguments for {@link entry.mint}. */
export type MintArgs = {
  args: {
    /** IDL type: `Address` */
    recipient: p.RawAddress;
    /** IDL type: `U64` */
    amount: p.U64;
  };
  typeArgs: {
    CoinType: string;
  };
};

/** Payload arguments for {@link entry.accept_minter}. */
export type AcceptMinterArgs = {
  args: {
    /** IDL type: `Address` */
    base: p.RawAddress;
  };
  typeArgs: {
    CoinType: string;
  };
};

/** Payload arguments for {@link entry.accept_owner}. */
export type AcceptOwnerArgs = {
  typeArgs: {
    CoinType: string;
  };
};

/** Payload arguments for {@link entry.create_with_coin}. */
export type CreateWithCoinArgs = {
  args: {
    /** IDL type: `Vector(U8)` */
    name: p.ByteString;
    /** IDL type: `U64` */
    decimals: p.U64;
    /** IDL type: `U64` */
    hard_cap: p.U64;
  };
  typeArgs: {
    CoinType: string;
  };
};

/** Payload arguments for {@link entry.offer_minter}. */
export type OfferMinterArgs = {
  args: {
    /** IDL type: `Address` */
    destination: p.RawAddress;
    /** IDL type: `U64` */
    allowance: p.U64;
  };
  typeArgs: {
    CoinType: string;
  };
};

/** Payload arguments for {@link entry.offer_owner}. */
export type OfferOwnerArgs = {
  args: {
    /** IDL type: `Address` */
    recipient: p.RawAddress;
  };
  typeArgs: {
    CoinType: string;
  };
};

export * as entry from "./entry.js";
export * as entryNames from "./entryNames.js";
export { idl } from "./idl.js";
export * as payloads from "./payloads.js";

/** The address of the module. */
export const ADDRESS =
  "0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c" as const;
/** The full module name. */
export const FULL_NAME =
  "0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::mw_entry" as const;
/** The name of the module. */
export const NAME = "mw_entry" as const;

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
  accept_minter: {
    name: "accept_minter",
    doc: "Accepts the minter if possible.",
    ty_args: ["CoinType"],
    args: [
      {
        name: "base",
        ty: "address",
      },
    ],
  },
  accept_owner: {
    name: "accept_owner",
    doc: "Accepts the owner.",
    ty_args: ["CoinType"],
    args: [],
  },
  create_with_coin: {
    name: "create_with_coin",
    doc: "Creates a new coin and mint_wrapper.\nThe given account also becomes the mint_wrapper's base.",
    ty_args: ["CoinType"],
    args: [
      {
        name: "name",
        ty: {
          vector: "u8",
        },
      },
      {
        name: "decimals",
        ty: "u64",
      },
      {
        name: "hard_cap",
        ty: "u64",
      },
    ],
  },
  mint: {
    name: "mint",
    doc: "Mints coins from the mint_wrapper on behalf of the mint_wrapper's authority.",
    ty_args: ["CoinType"],
    args: [
      {
        name: "recipient",
        ty: "address",
      },
      {
        name: "amount",
        ty: "u64",
      },
    ],
  },
  offer_minter: {
    name: "offer_minter",
    doc: "Creates a new minter with the given allowance, offering it.",
    ty_args: ["CoinType"],
    args: [
      {
        name: "destination",
        ty: "address",
      },
      {
        name: "allowance",
        ty: "u64",
      },
    ],
  },
  offer_owner: {
    name: "offer_owner",
    doc: "Offers the owner.",
    ty_args: ["CoinType"],
    args: [
      {
        name: "recipient",
        ty: "address",
      },
    ],
  },
} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {} as const;

/** Payload generators for module `0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c::mw_entry`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/** Entry functions for the mint_wrapper. */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x8f6ce396d6c4b9c7c992f018e94df010ec5c50835d1c83186c023bfa22df638c",
  "mw_entry"
> as typeof moduleImpl;
