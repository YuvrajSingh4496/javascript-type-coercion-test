import VBoolean from "./v-boolean";
import VNull from "./v-null";
import VNumber from "./v-number";
import VString from "./v-string";
import VUndefined from "./v-undefined";

export const PRIMITIVE_VALUES = [
  VNull,
  VBoolean,
  VString,
  VNumber,
  VUndefined
];


export const RANDOM_VALUES: Record<string, any[]> = {
  "VBoolean": [
    true,
    false,
    "1",
    "'xyz'",
    "0",
    "-1",
    NaN
  ],
  "VNull": [
    null
  ],
  "VString": [
    "'1'",
    "'23'",
    "'0'",
    "'24'",
    "'Hello World!'",
    "'-1'"
  ],
  "VNumber": [
    'undefined',
    '0',
    0,
    -1,
    888,
    '23221n',
    Infinity,
    NaN
  ],
  "VUndefined": [
    undefined
  ],
};