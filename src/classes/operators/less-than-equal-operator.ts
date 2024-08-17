import { Operator } from "../../types/global";

class LessThanEqualOperator implements Operator {
  getOperator(): string {
    return '<=';
  }
}

export default LessThanEqualOperator;