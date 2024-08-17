import PrimitiveValue from "../primitive-value";

class VString extends PrimitiveValue<string> {
  constructor(value: string) {
    super(value);
  }
}


export default VString;