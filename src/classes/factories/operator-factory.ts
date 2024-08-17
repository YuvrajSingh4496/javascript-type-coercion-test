import { Factory, Operator, Constructor } from '../../types/global';
import EqualityOperator from "../operators/equality-operator";
import { RELATIONAL_OPERATORS, UNARY_OPERATORS } from "../operators";
import _ from "lodash";

class OperatorFactory implements Factory<Operator> {
  make(args?: any): Operator {
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
}

export default OperatorFactory;