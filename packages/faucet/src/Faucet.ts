/**
 * A coin faucet for the Aptos devnet.
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
 * Payload arguments for {@link FaucetModule.initialize}.
 */
export type InitializePayload = {
  args: {
    /** IDL type: `Address` */
    minter: p.RawAddress;
  };
};

/** Entrypoint builders. */
export const entrypoints = {
  /** Initializes the [Faucet]. */
  initialize: ({ args }: InitializePayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::Faucet::initialize",
    type_arguments: [],
    arguments: [args.minter],
  }),
} as const;

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

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98",
  /** The full module name. */
  FULL_NAME:
    "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98::Faucet",
  /** The name of the module. */
  NAME: "Faucet",
} as const;

/** Module errors. */
export const errors = {} as const;

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
  errors,
  errorCodes,
  functions,
  resources,
  structs,

  ...entrypoints,
} as const;

/** A coin faucet for the Aptos devnet. */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x6718cd7a0bd0e8a34ea586640f4c55910514c2acf495a0453575bbc8c556cd98",
  "Faucet"
> as typeof moduleImpl;
