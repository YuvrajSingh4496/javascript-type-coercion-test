import PrimitiveValue from "../operand-value";

class VNumber extends PrimitiveValue<number> {
  constructor(value: number) {
    super(value);
  }
}


export default VNumber;