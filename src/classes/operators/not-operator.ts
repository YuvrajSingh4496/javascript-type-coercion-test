import { Operator } from "../../types/global";

class NotOperator implements Operator {
  getOperator(): string {
    return '!';
  }
}

export default NotOperator;