import { Operand, Factory } from "../../types/global";
import PrimitiveOperand from "../primitive-operand";
import OperatorFactory from "./operator-factory";
import ValueFactory from "./value-factory";
import WrapperFactory from "./wrapper-factory";

class OperandFactory implements Factory<Operand> {
  
  make(): Operand {
    return new PrimitiveOperand(
      new ValueFactory().make(),
      new OperatorFactory().make(),
      new WrapperFactory().make()
    );
  }
  
  makeRandom(): Operand {
    return new PrimitiveOperand(
      new ValueFactory().makeRandom(),
      new OperatorFactory().makeRandomUnary(),
      new WrapperFactory().makeRandom()
    );
  }
}

export default OperandFactory;