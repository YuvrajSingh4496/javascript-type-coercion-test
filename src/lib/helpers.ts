import { LOGICAL_OPERATORS } from "../classes/operators";

export function formatString(str: string) {
  const operators = LOGICAL_OPERATORS.map(op => new op());

  operators.map(o => str = str.split(o.getOperator()).join(`<br><br> ${o.getOperator()} <br><br>`));

  return str;
}