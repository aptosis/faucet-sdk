/**
 * Module errors.
 *
 * @module
 */
/** Must be the owner of the mint wrapper. */
export const ENOT_OWNER = {
  code: 1,
  name: "ENOT_OWNER",
  doc: "Must be the owner of the mint wrapper.",
} as const;

/** You do not have the minter privilege for this mint wrapper. */
export const ENOT_MINTER = {
  code: 2,
  name: "ENOT_MINTER",
  doc: "You do not have the minter privilege for this mint wrapper.",
} as const;

/** Allowance exceeded. */
export const EINSUFFICIENT_ALLOWANCE = {
  code: 3,
  name: "EINSUFFICIENT_ALLOWANCE",
  doc: "Allowance exceeded.",
} as const;
