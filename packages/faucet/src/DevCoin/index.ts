/**
 * Coins used for devnet.
 *
 * **Module ID:** `0x6fdf5c5cf431d5db75b2b53f0df8aa6687056d47ea7a588e9c512dd2b7a810a8::DevCoin`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

export * as entry from "./entry.js";
export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS =
  "0x6fdf5c5cf431d5db75b2b53f0df8aa6687056d47ea7a588e9c512dd2b7a810a8" as const;
/** The full module name. */
export const FULL_NAME =
  "0x6fdf5c5cf431d5db75b2b53f0df8aa6687056d47ea7a588e9c512dd2b7a810a8::DevCoin" as const;
/** The name of the module. */
export const NAME = "DevCoin" as const;

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
  init_avax: {
    name: "init_avax",
    doc: "Initializes the AVAX token.",
    ty_args: [],
    args: [],
  },
  init_avery: {
    name: "init_avery",
    doc: "Initializes the AVERY token.",
    ty_args: [],
    args: [],
  },
  init_bamba: {
    name: "init_bamba",
    doc: "Initializes the BAMBA token.",
    ty_args: [],
    args: [],
  },
  init_baum: {
    name: "init_baum",
    doc: "Initializes the BAUM token.",
    ty_args: [],
    args: [],
  },
  init_btc: {
    name: "init_btc",
    doc: "Initializes the BTC token.",
    ty_args: [],
    args: [],
  },
  init_ching: {
    name: "init_ching",
    doc: "Initializes the CHING token.",
    ty_args: [],
    args: [],
  },
  init_dat: {
    name: "init_dat",
    doc: "Initializes the DAT token.",
    ty_args: [],
    args: [],
  },
  init_eth: {
    name: "init_eth",
    doc: "Initializes the ETH token.",
    ty_args: [],
    args: [],
  },
  init_far: {
    name: "init_far",
    doc: "Initializes the FAR token.",
    ty_args: [],
    args: [],
  },
  init_jain: {
    name: "init_jain",
    doc: "Initializes the JAIN token.",
    ty_args: [],
    args: [],
  },
  init_knv: {
    name: "init_knv",
    doc: "Initializes the KNV token.",
    ty_args: [],
    args: [],
  },
  init_ksam: {
    name: "init_ksam",
    doc: "Initializes the KSAM token.",
    ty_args: [],
    args: [],
  },
  init_mo: {
    name: "init_mo",
    doc: "Initializes the MO token.",
    ty_args: [],
    args: [],
  },
  init_near: {
    name: "init_near",
    doc: "Initializes the NEAR token.",
    ty_args: [],
    args: [],
  },
  init_sbf: {
    name: "init_sbf",
    doc: "Initializes the SBF token.",
    ty_args: [],
    args: [],
  },
  init_sbr: {
    name: "init_sbr",
    doc: "Initializes the SBR token.",
    ty_args: [],
    args: [],
  },
  init_shake: {
    name: "init_shake",
    doc: "Initializes the SHAKE token.",
    ty_args: [],
    args: [],
  },
  init_sham: {
    name: "init_sham",
    doc: "Initializes the SHAM token.",
    ty_args: [],
    args: [],
  },
  init_sol: {
    name: "init_sol",
    doc: "Initializes the SOL token.",
    ty_args: [],
    args: [],
  },
  init_ting: {
    name: "init_ting",
    doc: "Initializes the TING token.",
    ty_args: [],
    args: [],
  },
  init_usdc: {
    name: "init_usdc",
    doc: "Initializes the USDC token.",
    ty_args: [],
    args: [],
  },
  init_usdt: {
    name: "init_usdt",
    doc: "Initializes the USDT token.",
    ty_args: [],
    args: [],
  },
  init_wsui: {
    name: "init_wsui",
    doc: "Initializes the WSUI token.",
    ty_args: [],
    args: [],
  },
} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {
  AVAX: "0x6fdf5c5cf431d5db75b2b53f0df8aa6687056d47ea7a588e9c512dd2b7a810a8::DevCoin::AVAX",
  AVERY:
    "0x6fdf5c5cf431d5db75b2b53f0df8aa6687056d47ea7a588e9c512dd2b7a810a8::DevCoin::AVERY",
  BAMBA:
    "0x6fdf5c5cf431d5db75b2b53f0df8aa6687056d47ea7a588e9c512dd2b7a810a8::DevCoin::BAMBA",
  BAUM: "0x6fdf5c5cf431d5db75b2b53f0df8aa6687056d47ea7a588e9c512dd2b7a810a8::DevCoin::BAUM",
  BTC: "0x6fdf5c5cf431d5db75b2b53f0df8aa6687056d47ea7a588e9c512dd2b7a810a8::DevCoin::BTC",
  CHING:
    "0x6fdf5c5cf431d5db75b2b53f0df8aa6687056d47ea7a588e9c512dd2b7a810a8::DevCoin::CHING",
  DAT: "0x6fdf5c5cf431d5db75b2b53f0df8aa6687056d47ea7a588e9c512dd2b7a810a8::DevCoin::DAT",
  ETH: "0x6fdf5c5cf431d5db75b2b53f0df8aa6687056d47ea7a588e9c512dd2b7a810a8::DevCoin::ETH",
  FAR: "0x6fdf5c5cf431d5db75b2b53f0df8aa6687056d47ea7a588e9c512dd2b7a810a8::DevCoin::FAR",
  JAIN: "0x6fdf5c5cf431d5db75b2b53f0df8aa6687056d47ea7a588e9c512dd2b7a810a8::DevCoin::JAIN",
  KNV: "0x6fdf5c5cf431d5db75b2b53f0df8aa6687056d47ea7a588e9c512dd2b7a810a8::DevCoin::KNV",
  KSAM: "0x6fdf5c5cf431d5db75b2b53f0df8aa6687056d47ea7a588e9c512dd2b7a810a8::DevCoin::KSAM",
  MO: "0x6fdf5c5cf431d5db75b2b53f0df8aa6687056d47ea7a588e9c512dd2b7a810a8::DevCoin::MO",
  NEAR: "0x6fdf5c5cf431d5db75b2b53f0df8aa6687056d47ea7a588e9c512dd2b7a810a8::DevCoin::NEAR",
  SBF: "0x6fdf5c5cf431d5db75b2b53f0df8aa6687056d47ea7a588e9c512dd2b7a810a8::DevCoin::SBF",
  SBR: "0x6fdf5c5cf431d5db75b2b53f0df8aa6687056d47ea7a588e9c512dd2b7a810a8::DevCoin::SBR",
  SHAKE:
    "0x6fdf5c5cf431d5db75b2b53f0df8aa6687056d47ea7a588e9c512dd2b7a810a8::DevCoin::SHAKE",
  SHAM: "0x6fdf5c5cf431d5db75b2b53f0df8aa6687056d47ea7a588e9c512dd2b7a810a8::DevCoin::SHAM",
  SOL: "0x6fdf5c5cf431d5db75b2b53f0df8aa6687056d47ea7a588e9c512dd2b7a810a8::DevCoin::SOL",
  TING: "0x6fdf5c5cf431d5db75b2b53f0df8aa6687056d47ea7a588e9c512dd2b7a810a8::DevCoin::TING",
  USDC: "0x6fdf5c5cf431d5db75b2b53f0df8aa6687056d47ea7a588e9c512dd2b7a810a8::DevCoin::USDC",
  USDT: "0x6fdf5c5cf431d5db75b2b53f0df8aa6687056d47ea7a588e9c512dd2b7a810a8::DevCoin::USDT",
  WSUI: "0x6fdf5c5cf431d5db75b2b53f0df8aa6687056d47ea7a588e9c512dd2b7a810a8::DevCoin::WSUI",
} as const;

/** Payload generators for module `0x6fdf5c5cf431d5db75b2b53f0df8aa6687056d47ea7a588e9c512dd2b7a810a8::DevCoin`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/** Coins used for devnet. */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x6fdf5c5cf431d5db75b2b53f0df8aa6687056d47ea7a588e9c512dd2b7a810a8",
  "DevCoin"
> as typeof moduleImpl;
