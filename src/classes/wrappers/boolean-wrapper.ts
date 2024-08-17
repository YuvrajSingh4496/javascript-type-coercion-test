import { Wrapper } from "../../types/global";

class BooleanWrapper implements Wrapper {
  wrap(value: string) {
    return `Boolean(${value})`;
  }
}


export default BooleanWrapper;