import PrimitiveValue from "../operand-value";

class VUndefined extends PrimitiveValue<undefined> {
  constructor(value: undefined) {
    super(value);
  }
}

export default VUndefined;