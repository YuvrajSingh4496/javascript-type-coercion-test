import { Operator } from "../../types/global";

class NullOperator implements Operator {
  getOperator(): string {
    return '';
  }
}

export default NullOperator;