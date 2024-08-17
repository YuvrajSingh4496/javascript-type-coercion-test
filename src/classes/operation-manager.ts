import { Evaluates, Operation, Operator, Stringify } from "../types/global";
import OperationFactory from "./factories/operation-factory";
import OperatorFactory from "./factories/operator-factory";
import _ from "lodash";

class OperationManager implements Evaluates, Stringify {
  operations: Operation[] = [];
  operators: Operator[] = [];

  addOperation(operation: Operation) {
    this.operations.push(operation);
    return this;
  }

  addOperator(operator: Operator) {
    this.operators.push(operator);
    return this;
  }

  makeRandom(min = 1, max = 5) {
    const operations = new OperationFactory().makeNOperations(_.random(min, max));
    const operators = new OperatorFactory().makeNLogicalOperators(operations.length - 1);

    for (let operation of operations) {
      this.addOperation(operation);
    }

    for (let operator of operators) {
      this.addOperator(operator);
    }

    return this;
  }

  evaluate(_case: boolean): boolean {
    return eval(this.toString()) === _case;
  }
  
  toString() {
    let res = "";

    for (let i = 0; i < this.operations.length; i++) {
      res += this.operations[i].toString();
      
      if (this.operators[i]) {
        res += " " + this.operators[i]?.getOperator() + " ";
      }
    }
    
    return res;
  }

}

export default OperationManager;