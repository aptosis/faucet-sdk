/**
 * Entrypoint script function payloads.
 *
 * @module
 */

/**
 * Script function payload for `0x2522bca997f581b007c8977992f4e38cd756bf11fc263d29a4275b703259a21a::faucet::initialize`.
 *
 * Initializes the [Faucet].
 */
export type Initialize = {
  readonly type: "script_function_payload";
  readonly function: "0x2522bca997f581b007c8977992f4e38cd756bf11fc263d29a4275b703259a21a::faucet::initialize";
  readonly arguments: [minter: string];
  readonly type_arguments: [];
};
