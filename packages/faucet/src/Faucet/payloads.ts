/**
 * Entrypoint script function payloads.
 *
 * @module
 */

/**
 * Script function payload for `0x6fdf5c5cf431d5db75b2b53f0df8aa6687056d47ea7a588e9c512dd2b7a810a8::Faucet::initialize`.
 *
 * Initializes the [Faucet].
 */
export type Initialize = {
  readonly type: "script_function_payload";
  readonly function: "0x6fdf5c5cf431d5db75b2b53f0df8aa6687056d47ea7a588e9c512dd2b7a810a8::Faucet::initialize";
  readonly arguments: [minter: string];
  readonly type_arguments: [];
};
