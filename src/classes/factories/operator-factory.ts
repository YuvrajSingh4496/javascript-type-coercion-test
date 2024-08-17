import { Factory, Operator, Constructor } from '../../types/global';
import EqualityOperator from "../operators/equality-operator";
import { LOGICAL_OPERATORS, RELATIONAL_OPERATORS, UNARY_OPERATORS } from "../operators";
import _ from "lodash";

class OperatorFactory implements Factory<Operator> {
  make(): Operator {
    return new EqualityOperator();
  }

  makeRandom(): Operator {
    const constructor = _.sample(RELATIONAL_OPERATORS) as unknown as Constructor; 
    return new constructor();
  }
  
  makeRandomUnary(): Operator {
    const constructor = _.sample(UNARY_OPERATORS) as unknown as Constructor; 
    return new constructor();
  }

  makeRandomLogical(): Operator {
    const constructor = _.sample(LOGICAL_OPERATORS) as unknown as Constructor; 
    return new constructor();
  }

  makeNLogicalOperators(n: number): Operator[] {
    const operators = [];
    let i = 0;
    while (i < n) {
      operators.push(this.makeRandomLogical());
      i += 1;
    }

    return operators;
  }
}

export default OperatorFactory;