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
    Infinity,
    "'true'",
    "'false'",
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
    "'-1'",
    "'null'",
    "'Infinity'",
    "'undefined'",
    "''",
  ],
  "VNumber": [
    'undefined',
    '0',
    0,
    0o2,
    3,
    -1,
    888,
    9007199254740991n,
    "'9007199254740991n'",
    "'02'",
    "'05'",
    Infinity,
    NaN
  ],
  "VUndefined": [
    undefined
  ],
};