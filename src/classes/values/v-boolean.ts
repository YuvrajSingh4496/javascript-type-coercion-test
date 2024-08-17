import PrimitiveValue from "../primitive-value";

class VBoolean extends PrimitiveValue<boolean> {  
  constructor(value: boolean) {
    super(value);
  }
}


export default VBoolean;