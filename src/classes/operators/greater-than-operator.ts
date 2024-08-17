import { Operator } from "../../types/global";

class GreaterThanOperator implements Operator {
  getOperator(): string {
    return '>';
  }
}

export default GreaterThanOperator;