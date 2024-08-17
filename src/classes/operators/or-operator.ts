import { Operator } from "../../types/global";

class OrOperator implements Operator {
  getOperator(): string {
    return '||';
  }
}

export default OrOperator;