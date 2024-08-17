import { Operator } from "../../types/global";

class GreaterThanEqualOperator implements Operator {
  getOperator(): string {
    return '>=';
  }
}

export default GreaterThanEqualOperator;