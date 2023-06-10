import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsBooleans} from './Exercise-js-booleans/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsNumbers } from './Exercise-js-numbers/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsNumbersBoolean } from './JsNumbersTraning/router-data';
import { blockRouterMetaData as blockRouterMetaDataHitTheMole} from './HitTheMole/router-data';
import { blockRouterMetaData as blockRouterMetaDataMemoryGame} from './MemoryGame/router-data';


export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataJsBooleans,
  blockRouterMetaDataJsNumbers,
  blockRouterMetaDataJsNumbersBoolean,
  blockRouterMetaDataHitTheMole,
  blockRouterMetaDataMemoryGame
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
