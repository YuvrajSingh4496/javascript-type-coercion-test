import { Value } from '../types/global';
class OperandValue<T> implements Value<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }

  setValue(value: T): Value<T> {
    this.value = value; 
    return this;
  }
  
  toString(): string {
    return String(this.value);
  }
}

export default OperandValue;