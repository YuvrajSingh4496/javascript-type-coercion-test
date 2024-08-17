import VNull from "../values/v-null";
import { Factory, Value } from "../../types/global";
import { PRIMITIVE_VALUES } from "../values";
import _ from "lodash";
import { RANDOM_VALUES } from '../values/index';

class ValueFactory implements Factory<Value<any>> {
    make(): Value<any> {
      return new VNull(null);      
    }
    
    makeRandom(): Value<any> {
      const constructor = _.sample(PRIMITIVE_VALUES) as unknown as any;
      let value = null;
      if (RANDOM_VALUES[constructor.name]) {
        value = _.sample(RANDOM_VALUES[constructor.name]);
      }

      if (!value) {
        return new VNull(null);
      }
      
      return new constructor(value) as any;
    }
}


export default ValueFactory;