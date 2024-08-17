import { Operator } from "../../types/global";

class LessThanOperator implements Operator {
  getOperator(): string {
    return '<';
  }
}

export default LessThanOperator;