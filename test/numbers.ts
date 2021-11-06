/* eslint-disable no-unused-vars */

import { NumberRange } from '../types/NumberRange';

/* -------------------------------------------- */
/* NUMBER RANGE                                 */
/* -------------------------------------------- */

// VALID

const valid_range_1: NumberRange<1, 5> = 1;
const valid_range_2: NumberRange<1, 50> = 49;

// INVALID

const invalid_range_1: NumberRange<1, 4> = 5;
const invalid_range_2: NumberRange<10, 12> = 9;

console.log(
  valid_range_1,
  valid_range_2,
  invalid_range_1,
  invalid_range_2
);
