import { Operator } from "../../types/global";

class EqualityOperator implements Operator {
  getOperator(): string {
    return '==';
  }
}

export default EqualityOperator;