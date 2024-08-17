import PrimitiveValue from "../operand-value";

class VNull extends PrimitiveValue<null> {  
  constructor(value: null) {
    super(value);
  }
}


export default VNull;