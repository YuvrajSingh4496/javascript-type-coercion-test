import { Wrapper } from "../../types/global";

class NullWrapper implements Wrapper {
  wrap(value: string) {
    return value;
  }
}


export default NullWrapper;