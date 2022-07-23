/**
 * Entrypoint script function payloads.
 *
 * @module
 */

/**
 * Script function payload for `0x10cf22de3cef0a6ef68b2da43e1d20c189c033c93a8503a40ee06c0347a11ea0::faucet::initialize`.
 *
 * Initializes the [Faucet].
 */
export type Initialize = {
  readonly type: "script_function_payload";
  readonly function: "0x10cf22de3cef0a6ef68b2da43e1d20c189c033c93a8503a40ee06c0347a11ea0::faucet::initialize";
  readonly arguments: [minter: string];
  readonly type_arguments: [];
};
