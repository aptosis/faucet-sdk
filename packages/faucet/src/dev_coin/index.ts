/**
 * Coins used for devnet.
 *
 * **Module ID:** `0x10cf22de3cef0a6ef68b2da43e1d20c189c033c93a8503a40ee06c0347a11ea0::dev_coin`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

export * as entry from "./entry.js";
export * as entryNames from "./entryNames.js";
export { idl } from "./idl.js";
export * as payloads from "./payloads.js";

/** The address of the module. */
export const ADDRESS =
  "0x10cf22de3cef0a6ef68b2da43e1d20c189c033c93a8503a40ee06c0347a11ea0" as const;
/** The full module name. */
export const FULL_NAME =
  "0x10cf22de3cef0a6ef68b2da43e1d20c189c033c93a8503a40ee06c0347a11ea0::dev_coin" as const;
/** The name of the module. */
export const NAME = "dev_coin" as const;

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
  init_aptos: {
    name: "init_aptos",
    doc: "Initializes the APTOS token.",
    ty_args: [],
    args: [],
  },
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
  APTOS:
    "0x10cf22de3cef0a6ef68b2da43e1d20c189c033c93a8503a40ee06c0347a11ea0::dev_coin::APTOS",
  AVAX: "0x10cf22de3cef0a6ef68b2da43e1d20c189c033c93a8503a40ee06c0347a11ea0::dev_coin::AVAX",
  AVERY:
    "0x10cf22de3cef0a6ef68b2da43e1d20c189c033c93a8503a40ee06c0347a11ea0::dev_coin::AVERY",
  BAMBA:
    "0x10cf22de3cef0a6ef68b2da43e1d20c189c033c93a8503a40ee06c0347a11ea0::dev_coin::BAMBA",
  BAUM: "0x10cf22de3cef0a6ef68b2da43e1d20c189c033c93a8503a40ee06c0347a11ea0::dev_coin::BAUM",
  BTC: "0x10cf22de3cef0a6ef68b2da43e1d20c189c033c93a8503a40ee06c0347a11ea0::dev_coin::BTC",
  DAT: "0x10cf22de3cef0a6ef68b2da43e1d20c189c033c93a8503a40ee06c0347a11ea0::dev_coin::DAT",
  ETH: "0x10cf22de3cef0a6ef68b2da43e1d20c189c033c93a8503a40ee06c0347a11ea0::dev_coin::ETH",
  FAR: "0x10cf22de3cef0a6ef68b2da43e1d20c189c033c93a8503a40ee06c0347a11ea0::dev_coin::FAR",
  JAIN: "0x10cf22de3cef0a6ef68b2da43e1d20c189c033c93a8503a40ee06c0347a11ea0::dev_coin::JAIN",
  KNV: "0x10cf22de3cef0a6ef68b2da43e1d20c189c033c93a8503a40ee06c0347a11ea0::dev_coin::KNV",
  KSAM: "0x10cf22de3cef0a6ef68b2da43e1d20c189c033c93a8503a40ee06c0347a11ea0::dev_coin::KSAM",
  MO: "0x10cf22de3cef0a6ef68b2da43e1d20c189c033c93a8503a40ee06c0347a11ea0::dev_coin::MO",
  NEAR: "0x10cf22de3cef0a6ef68b2da43e1d20c189c033c93a8503a40ee06c0347a11ea0::dev_coin::NEAR",
  SBF: "0x10cf22de3cef0a6ef68b2da43e1d20c189c033c93a8503a40ee06c0347a11ea0::dev_coin::SBF",
  SBR: "0x10cf22de3cef0a6ef68b2da43e1d20c189c033c93a8503a40ee06c0347a11ea0::dev_coin::SBR",
  SHAKE:
    "0x10cf22de3cef0a6ef68b2da43e1d20c189c033c93a8503a40ee06c0347a11ea0::dev_coin::SHAKE",
  SHAM: "0x10cf22de3cef0a6ef68b2da43e1d20c189c033c93a8503a40ee06c0347a11ea0::dev_coin::SHAM",
  SOL: "0x10cf22de3cef0a6ef68b2da43e1d20c189c033c93a8503a40ee06c0347a11ea0::dev_coin::SOL",
  TING: "0x10cf22de3cef0a6ef68b2da43e1d20c189c033c93a8503a40ee06c0347a11ea0::dev_coin::TING",
  USDC: "0x10cf22de3cef0a6ef68b2da43e1d20c189c033c93a8503a40ee06c0347a11ea0::dev_coin::USDC",
  USDT: "0x10cf22de3cef0a6ef68b2da43e1d20c189c033c93a8503a40ee06c0347a11ea0::dev_coin::USDT",
  WSUI: "0x10cf22de3cef0a6ef68b2da43e1d20c189c033c93a8503a40ee06c0347a11ea0::dev_coin::WSUI",
} as const;

/** Payload generators for module `0x10cf22de3cef0a6ef68b2da43e1d20c189c033c93a8503a40ee06c0347a11ea0::dev_coin`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/** Coins used for devnet. */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x10cf22de3cef0a6ef68b2da43e1d20c189c033c93a8503a40ee06c0347a11ea0",
  "dev_coin"
> as typeof moduleImpl;
