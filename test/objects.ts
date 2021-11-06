/* eslint-disable no-unused-vars */

import { OmitProps } from '../types/OmitProps';
import { PickProps } from '../types/PickProps';
import { Valueof } from '../types/Valueof';

/* -------------------------------------------- */
/* OMIT PROPS                                   */
/* -------------------------------------------- */

// VALID

const valid_omit_props_1: OmitProps<['a'], {
  a: string;
  b: string;
}> = {
  b: 'two'
};

const valid_omit_props_2: OmitProps<['a', 'd'], {
  a: string;
  b: string;
  c: number;
  d: {
    e: string
  }
}> = {
  b: 'two',
  c: 3
};

// INVALID

// ERROR
// PROPERTY "a" SHOULD BE EXCLUDED
const invalid_omit_props_1: OmitProps<['a'], {
  a: string;
  b: string;
}> = {
  a: 'one',
  b: 'two'
};

// ERROR
// THE RETURN TYPE SHOULD BE AN ARRAY
const invalid_omit_props_2: OmitProps<['a'], Array<{
  a: string;
  b: string;
}>> = {
  b: 'one'
};

console.log(
  valid_omit_props_1,
  valid_omit_props_2,
  invalid_omit_props_1,
  invalid_omit_props_2
);

/* -------------------------------------------- */
/* PICK PROPS                                   */
/* -------------------------------------------- */

// VALID

const valid_pick_props_1: PickProps<['a'], Array<{
  a: string;
  b: string;
}>> = [
  {
    a: 'one'
  }
];

const valid_pick_props_2: PickProps<['a', 'd'], {
  a: string;
  b: string;
  c: number;
  d: {
    e: string
  }
}[]> = [
  {
    a: 'one',
    d: {
      e: 'four'
    }
  }
];

const valid_pick_props_3: PickProps<['a', 'b', 'c'], {
  a: string;
  b: string;
  c: number;
  d: {
    e: string
  }
}> = {
  a: 'two',
  b: 'three',
  c: 3
};

// INVALID

// ERROR
// PROPERTY "b" SHOULD BE EXCLUDED
const invalid_pick_props_1: PickProps<['a'], {
  a: string;
  b: string;
}> = {
  a: 'one',
  b: 'two'
};

// ERROR
// THE RETURN TYPE SHOULD BE AN ARRAY
const invalid_pick_props_2: PickProps<['a'], Array<{
  a: string;
  b: string;
}>> = {
  a: 'one'
};

console.log(
  valid_pick_props_1,
  valid_pick_props_2,
  valid_pick_props_3,
  invalid_pick_props_1,
  invalid_pick_props_2
);

/* -------------------------------------------- */
/* VALUE OF                                     */
/* -------------------------------------------- */

// VALID

const valid_valueof: Valueof<{
  a: 'one',
  b: 'two'
}> = (
  'one' ||
  'two'
);

const invalid_valueof: Valueof<{
  a: 'one',
  b: 'two'
}> = (
  'one' ||
  'two' ||
  'three'
);

console.log(
  valid_valueof,
  invalid_valueof
);
