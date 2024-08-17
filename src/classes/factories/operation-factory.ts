import { Factory, Operation } from "../../types/global";
import BinaryOperation from "../operations/binary-operation";
import OperandFactory from "./operand-factory";
import OperatorFactory from "./operator-factory";

class OperationFactory implements Factory<Operation> {

  make(): Operation {
    return new BinaryOperation(
      new OperandFactory().make(),
      new OperandFactory().make(),
      new OperatorFactory().make()
    );
  }
  
  makeRandom(): Operation {
    return new BinaryOperation(
      new OperandFactory().makeRandom(),
      new OperandFactory().makeRandom(),
      new OperatorFactory().makeRandom()
    );
  }
}

export default OperationFactory;