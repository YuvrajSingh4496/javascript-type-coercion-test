import { Operand, Operator, Value, Wrapper } from '../types/global';

class PrimitiveOperand<T> implements Operand {
  operand: Value<T>;
  operator: Operator;
  wrapper: Wrapper;
  
  constructor(opd: Value<T>, opr: Operator, wrapper: Wrapper) {
    this.operand = opd;
    this.operator = opr;
    this.wrapper = wrapper;
  }

  toString(): string {
    const value = `${this.operator.getOperator()}${this.operand.value}`;
    return this.wrapper.wrap(value);
  }
}

export default PrimitiveOperand;