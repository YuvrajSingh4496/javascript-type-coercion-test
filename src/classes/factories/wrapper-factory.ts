import { Factory, Wrapper } from '../../types/global';
import { WRAPPERS } from '../wrappers';
import NullWrapper from '../wrappers/null-wrapper';
import _ from "lodash";

class WrapperFactory implements Factory<Wrapper> {
  make(): Wrapper {
    return new NullWrapper();
  }
  makeRandom(): Wrapper {
    const constructor = _.sample(WRAPPERS) as any;
    return new constructor();
  }
}


export default WrapperFactory;