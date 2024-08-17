import { Operator } from "../../types/global";

class NotEqualOperator implements Operator {
  getOperator(): string {
    return '!=';
  }
}

export default NotEqualOperator;