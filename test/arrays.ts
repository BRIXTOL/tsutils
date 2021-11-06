/* eslint-disable no-unused-vars */

import { ArrayFixed } from '../types/ArrayFixed';
import { ArrayMax } from '../types/ArrayMax';
import { ArrayMin } from '../types/ArrayMin';
import { ArrayRange } from '../types/ArrayRange';

/* -------------------------------------------- */
/* FIXED ARRAYS                                 */
/* -------------------------------------------- */

// VALID

const valid_fixed_1: ArrayFixed<2, string> = [ 'one', 'two' ];
const valid_fixed_2: ArrayFixed<2, { a: string }> = [ { a: 'one' }, { a: 'two' } ];

// INVALID

const invalid_fixed_1: ArrayFixed<1, string> = [ 'one', 'two' ];
const invalid_fixed_2: ArrayFixed<3, { a: string }> = [ { a: 'one' }, { a: 'two' } ];

console.log(
  valid_fixed_1,
  valid_fixed_2,
  invalid_fixed_1,
  invalid_fixed_2
);

/* -------------------------------------------- */
/* ARRAY MINIMUM LENGTH                         */
/* -------------------------------------------- */

// VALID

const valid_min_1: ArrayMin<2, string> = [ 'one', 'two' ];
const valid_min_2: ArrayMin<2, { a: string }> = [ { a: 'one' }, { a: 'two' } ];

// INVALID

const invalid_min_1: ArrayMin<3, string> = [ 'one', 'two' ];
const invalid_min_2: ArrayMin<3, { a: string }> = [ { a: 'one' }, { a: 'two' } ];

console.log(
  valid_min_1,
  valid_min_2,
  invalid_min_1,
  invalid_min_2
);

/* -------------------------------------------- */
/* ARRAY MAXIMUM LENGTH                         */
/* -------------------------------------------- */

// VALID

const valid_max_1: ArrayMax<3, string> = [ 'one', 'two' ];
const valid_max_2: ArrayMax<3, { a: string }> = [ { a: 'one' } ];

// INVALID

const invalid_max_1: ArrayMax<2, string> = [ 'one', 'two' ];
const invalid_max_2: ArrayMax<2, { a: string }> = [ { a: 'one' }, { a: 'two' } ];

console.log(
  valid_max_1,
  valid_max_2,
  invalid_max_1,
  invalid_max_2
);

/* -------------------------------------------- */
/* ARRAY RANGE LENGTH                           */
/* -------------------------------------------- */

// VALID

const valid_range_1: ArrayRange<1, 3, string> = [ 'one', 'two' ];
const valid_range_2: ArrayRange<1, 3, { a: string }> = [ { a: 'one' } ];
const valid_range_3: ArrayRange<3, 5, string> = [ 'one', 'two', 'three' ];

// INVALID

const invalid_range_1: ArrayRange<3, 5, string> = [ 'one', 'two' ];
const invalid_range_2: ArrayRange<2, 3, string> = [ 'one', 'two', 'three', 'four', 'five' ];
const invalid_range_3: ArrayRange<3, 5, { a: string }> = [ { a: 'one' }, { a: 'two' } ];

console.log(
  valid_range_1,
  valid_range_2,
  valid_range_3,
  invalid_range_1,
  invalid_range_3,
  invalid_range_2
);
