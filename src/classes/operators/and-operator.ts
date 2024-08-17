import { Operator } from "../../types/global";

class AndOperator implements Operator {
  getOperator(): string {
    return '&&';
  }
}

export default AndOperator;