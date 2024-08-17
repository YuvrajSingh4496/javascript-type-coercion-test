import { Wrapper } from "../../types/global";

class NumberWrapper implements Wrapper {
  wrap(value: string) {
    return `Number(${value})`;
  }
}


export default NumberWrapper;