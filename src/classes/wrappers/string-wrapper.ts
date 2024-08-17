import { Wrapper } from "../../types/global";

class StringWrapper implements Wrapper {
  wrap(value: string) {
    return `String(${value})`;
  }
}


export default StringWrapper;