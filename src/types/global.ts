export interface Stringify {
  toString(): string;
}

export interface Wrapper {
  wrap(value: string): string
}

export interface Operator {
  getOperator(): string;
}

export interface Value<T> extends Stringify {
  value: T;  
  setValue(value: T): Value<T>;
}

export interface Operand extends Stringify {
  operand: Value<any>;
  operator: Operator;
  wrapper: Wrapper;
}

export interface Operation {
  evaluate(_case: boolean): boolean;
  toString(): string;
}

export interface Factory<T> {
  make(args?: any): T;
  makeRandom(): T;
}

export interface Constructor {
  new (): Operator
}