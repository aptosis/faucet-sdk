/**
 * Coins used for devnet.
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** Entrypoint builders. */
export const entrypoints = {
  /** Initializes the AVAX token. */
  init_avax: (): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::init_avax",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the AVERY token. */
  init_avery: (): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::init_avery",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the BAMBA token. */
  init_bamba: (): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::init_bamba",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the BAUM token. */
  init_baum: (): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::init_baum",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the BTC token. */
  init_btc: (): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::init_btc",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the CHING token. */
  init_ching: (): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::init_ching",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the DAT token. */
  init_dat: (): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::init_dat",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the ETH token. */
  init_eth: (): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::init_eth",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the FAR token. */
  init_far: (): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::init_far",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the JAIN token. */
  init_jain: (): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::init_jain",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the KNV token. */
  init_knv: (): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::init_knv",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the KSAM token. */
  init_ksam: (): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::init_ksam",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the MO token. */
  init_mo: (): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::init_mo",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the NEAR token. */
  init_near: (): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::init_near",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the SBF token. */
  init_sbf: (): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::init_sbf",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the SBR token. */
  init_sbr: (): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::init_sbr",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the SHAKE token. */
  init_shake: (): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::init_shake",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the SHAM token. */
  init_sham: (): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::init_sham",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the SOL token. */
  init_sol: (): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::init_sol",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the TING token. */
  init_ting: (): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::init_ting",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the USDC token. */
  init_usdc: (): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::init_usdc",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the USDT token. */
  init_usdt: (): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::init_usdt",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the WSUI token. */
  init_wsui: (): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::init_wsui",
    type_arguments: [],
    arguments: [],
  }),
} as const;

/** The IDL of the module. */
export const idl = {
  module_id:
    "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin",
  doc: "Coins used for devnet.",
  functions: [
    {
      name: "init_avax",
      doc: "Initializes the AVAX token.",
      ty_args: [],
      args: [],
    },
    {
      name: "init_avery",
      doc: "Initializes the AVERY token.",
      ty_args: [],
      args: [],
    },
    {
      name: "init_bamba",
      doc: "Initializes the BAMBA token.",
      ty_args: [],
      args: [],
    },
    {
      name: "init_baum",
      doc: "Initializes the BAUM token.",
      ty_args: [],
      args: [],
    },
    {
      name: "init_btc",
      doc: "Initializes the BTC token.",
      ty_args: [],
      args: [],
    },
    {
      name: "init_ching",
      doc: "Initializes the CHING token.",
      ty_args: [],
      args: [],
    },
    {
      name: "init_dat",
      doc: "Initializes the DAT token.",
      ty_args: [],
      args: [],
    },
    {
      name: "init_eth",
      doc: "Initializes the ETH token.",
      ty_args: [],
      args: [],
    },
    {
      name: "init_far",
      doc: "Initializes the FAR token.",
      ty_args: [],
      args: [],
    },
    {
      name: "init_jain",
      doc: "Initializes the JAIN token.",
      ty_args: [],
      args: [],
    },
    {
      name: "init_knv",
      doc: "Initializes the KNV token.",
      ty_args: [],
      args: [],
    },
    {
      name: "init_ksam",
      doc: "Initializes the KSAM token.",
      ty_args: [],
      args: [],
    },
    {
      name: "init_mo",
      doc: "Initializes the MO token.",
      ty_args: [],
      args: [],
    },
    {
      name: "init_near",
      doc: "Initializes the NEAR token.",
      ty_args: [],
      args: [],
    },
    {
      name: "init_sbf",
      doc: "Initializes the SBF token.",
      ty_args: [],
      args: [],
    },
    {
      name: "init_sbr",
      doc: "Initializes the SBR token.",
      ty_args: [],
      args: [],
    },
    {
      name: "init_shake",
      doc: "Initializes the SHAKE token.",
      ty_args: [],
      args: [],
    },
    {
      name: "init_sham",
      doc: "Initializes the SHAM token.",
      ty_args: [],
      args: [],
    },
    {
      name: "init_sol",
      doc: "Initializes the SOL token.",
      ty_args: [],
      args: [],
    },
    {
      name: "init_ting",
      doc: "Initializes the TING token.",
      ty_args: [],
      args: [],
    },
    {
      name: "init_usdc",
      doc: "Initializes the USDC token.",
      ty_args: [],
      args: [],
    },
    {
      name: "init_usdt",
      doc: "Initializes the USDT token.",
      ty_args: [],
      args: [],
    },
    {
      name: "init_wsui",
      doc: "Initializes the WSUI token.",
      ty_args: [],
      args: [],
    },
  ],
  structs: [
    {
      name: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::AVAX",
      doc: "CoinType of Avalanche.",
      fields: [{ name: "dummy_field", ty: "bool" }],
      abilities: [],
    },
    {
      name: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::AVERY",
      doc: "CoinType of Avery Dennison Corp Class A Shares.",
      fields: [{ name: "dummy_field", ty: "bool" }],
      abilities: [],
    },
    {
      name: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::BAMBA",
      doc: "CoinType of Bamba Rewards.",
      fields: [{ name: "dummy_field", ty: "bool" }],
      abilities: [],
    },
    {
      name: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::BAUM",
      doc: "CoinType of Ebaumsworld.",
      fields: [{ name: "dummy_field", ty: "bool" }],
      abilities: [],
    },
    {
      name: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::BTC",
      doc: "CoinType of Bitcoin.",
      fields: [{ name: "dummy_field", ty: "bool" }],
      abilities: [],
    },
    {
      name: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::CHING",
      doc: "CoinType of Ching Cash.",
      fields: [{ name: "dummy_field", ty: "bool" }],
      abilities: [],
    },
    {
      name: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::DAT",
      doc: "CoinType of Datum Shares.",
      fields: [{ name: "dummy_field", ty: "bool" }],
      abilities: [],
    },
    {
      name: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::ETH",
      doc: "CoinType of Ether.",
      fields: [{ name: "dummy_field", ty: "bool" }],
      abilities: [],
    },
    {
      name: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::FAR",
      doc: "CoinType of Far Protocol.",
      fields: [{ name: "dummy_field", ty: "bool" }],
      abilities: [],
    },
    {
      name: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::JAIN",
      doc: "CoinType of Jain Street DAO.",
      fields: [{ name: "dummy_field", ty: "bool" }],
      abilities: [],
    },
    {
      name: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::KNV",
      doc: "CoinType of Kanav Korean Holdings.",
      fields: [{ name: "dummy_field", ty: "bool" }],
      abilities: [],
    },
    {
      name: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::KSAM",
      doc: "CoinType of Kysama Protocol Token.",
      fields: [{ name: "dummy_field", ty: "bool" }],
      abilities: [],
    },
    {
      name: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::MO",
      doc: "CoinType of Morimoto Restaurant Group.",
      fields: [{ name: "dummy_field", ty: "bool" }],
      abilities: [],
    },
    {
      name: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::NEAR",
      doc: "CoinType of Near Protocol.",
      fields: [{ name: "dummy_field", ty: "bool" }],
      abilities: [],
    },
    {
      name: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::SBF",
      doc: "CoinType of Salaam Bankorus Freud.",
      fields: [{ name: "dummy_field", ty: "bool" }],
      abilities: [],
    },
    {
      name: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::SBR",
      doc: "CoinType of Saber Protocol Token.",
      fields: [{ name: "dummy_field", ty: "bool" }],
      abilities: [],
    },
    {
      name: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::SHAKE",
      doc: "CoinType of ShakeN Token.",
      fields: [{ name: "dummy_field", ty: "bool" }],
      abilities: [],
    },
    {
      name: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::SHAM",
      doc: "CoinType of Shamu Protocol Token.",
      fields: [{ name: "dummy_field", ty: "bool" }],
      abilities: [],
    },
    {
      name: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::SOL",
      doc: "CoinType of Solana.",
      fields: [{ name: "dummy_field", ty: "bool" }],
      abilities: [],
    },
    {
      name: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::TING",
      doc: "CoinType of Tinghua Investment Group.",
      fields: [{ name: "dummy_field", ty: "bool" }],
      abilities: [],
    },
    {
      name: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::USDC",
      doc: "CoinType of USD Coin.",
      fields: [{ name: "dummy_field", ty: "bool" }],
      abilities: [],
    },
    {
      name: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::USDT",
      doc: "CoinType of Tether USD.",
      fields: [{ name: "dummy_field", ty: "bool" }],
      abilities: [],
    },
    {
      name: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::WSUI",
      doc: "CoinType of Wrapped SUI.",
      fields: [{ name: "dummy_field", ty: "bool" }],
      abilities: [],
    },
  ],
  errors: {},
} as const;

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98",
  /** The full module name. */
  FULL_NAME:
    "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin",
  /** The name of the module. */
  NAME: "DevCoin",
} as const;

/** Module errors. */
export const errors = {} as const;

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
  AVAX: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::AVAX",
  AVERY:
    "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::AVERY",
  BAMBA:
    "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::BAMBA",
  BAUM: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::BAUM",
  BTC: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::BTC",
  CHING:
    "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::CHING",
  DAT: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::DAT",
  ETH: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::ETH",
  FAR: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::FAR",
  JAIN: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::JAIN",
  KNV: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::KNV",
  KSAM: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::KSAM",
  MO: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::MO",
  NEAR: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::NEAR",
  SBF: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::SBF",
  SBR: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::SBR",
  SHAKE:
    "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::SHAKE",
  SHAM: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::SHAM",
  SOL: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::SOL",
  TING: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::TING",
  USDC: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::USDC",
  USDT: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::USDT",
  WSUI: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin::WSUI",
} as const;

/** Payload generators for module `0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::DevCoin`. */
const moduleImpl = {
  ...id,
  errors,
  errorCodes,
  functions,
  resources,
  structs,

  ...entrypoints,
} as const;

/** Coins used for devnet. */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98",
  "DevCoin"
> as typeof moduleImpl;
