import AndOperator from "./and-operator";
import EqualityOperator from "./equality-operator";
import GreaterThanEqualOperator from "./greater-than-equal-operator";
import GreaterThanOperator from "./greater-than-operator";
import LessThanEqualOperator from "./less-than-equal-operator";
import LessThanOperator from "./less-than-operator";
import NotEqualOperator from "./not-equal-operator";
import NotOperator from "./not-operator";
import NullOperator from "./null-operator";
import OrOperator from "./or-operator";

export const UNARY_OPERATORS = [
  NullOperator,
  NotOperator
];

export const LOGICAL_OPERATORS = [
  OrOperator,
  AndOperator
];

export const RELATIONAL_OPERATORS = [
  EqualityOperator,
  NotEqualOperator,
  EqualityOperator,
  GreaterThanEqualOperator,
  GreaterThanOperator,
  LessThanEqualOperator,
  LessThanOperator,
];
