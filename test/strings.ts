/* eslint-disable no-unused-vars */

import { AnyCase } from '../types/AnyCase';
import { LiteralUnion } from '../types/LiteralUnion';
import { ConcatUnion } from '../types/ConcatUnion';
import { Split } from '../types/Split';
/* -------------------------------------------- */
/* ANYCASE STRING                               */
/* -------------------------------------------- */

// VALID

const valid_anycase_1: AnyCase<'foo'> = (
  'FOO' ||
  'fOO' ||
  'foO' ||
  'Foo' ||
  'FOo' ||
  'foo' ||
  'fOo' ||
  'FoO'
);

const valid_anycase_2: AnyCase<'foo' | 'boo'> = (
  'FOO' || 'BOO' ||
  'fOO' || 'bOO' ||
  'foO' || 'boO' ||
  'Foo' || 'Boo' ||
  'FOo' || 'bOo' ||
  'foo' || 'boo' ||
  'fOo' || 'bOo' ||
  'FoO' || 'BoO'
);

// INVALID

const invalid_anycase_1: AnyCase<'foo'> = 'fooo';
const invalid_anycase_2: AnyCase<'foo'> = 'fo';

console.log(
  valid_anycase_1,
  valid_anycase_2,
  invalid_anycase_1,
  invalid_anycase_2
);

/* -------------------------------------------- */
/* CONCAT UNION                                 */
/* -------------------------------------------- */

// VALID AND INVALID

const concat_union_1: {
  valid: ConcatUnion<'A' | 'B', '|'>,
  invalid: ConcatUnion<'A' | 'B', '|'>
} = {
  valid: 'A|B',
  invalid: 'A|A'
};

const concat_union_2: {
  valid: ConcatUnion<'A' | 'B' | 'C', ','>,
  invalid: ConcatUnion<'A' | 'B' | 'C' | 'D', '-'>
} = {
  valid: 'A,B,C',
  invalid: 'C-B-A-'
};

console.log(
  concat_union_1,
  concat_union_2
);

/* -------------------------------------------- */
/* LITERAL UNION                                */
/* -------------------------------------------- */

const literal_union_1 = (
  <T extends LiteralUnion<'A' | 'B'>>(param: T): { return: T } => (
    {
      return: param
    }
  )
)('C');

const literal_union_2: {
  valid: LiteralUnion<'A' | 'B'>,
  invalid: LiteralUnion<'C' | 'D'>
} = {
  valid: 'A',
  invalid: 1
};

console.log(
  literal_union_1,
  literal_union_2
);

/* -------------------------------------------- */
/* SPLIT                                        */
/* -------------------------------------------- */

const split: Split<'a,b,c', ','> = ;
