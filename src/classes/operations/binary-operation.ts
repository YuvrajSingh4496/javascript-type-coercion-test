import { Operand, Operation, Operator } from "../../types/global";

class BinaryOperation implements Operation {
  left: Operand;
  right: Operand;
  operator: Operator;

  constructor(left: Operand, right: Operand, operator: Operator) {
    this.left = left;
    this.right = right;
    this.operator = operator;
  }

  evaluate(_case: boolean): boolean {
    return eval(this.toString()) === _case;
  }

  toString(): string {
    return `${this.left.toString()} ${this.operator.getOperator()} ${this.right.toString()}`;
  }
}

export default BinaryOperation;