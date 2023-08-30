import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { Cwiczenie1MetaData } from './Cwiczenie1/router-data';
import { Cwiczenie2MetaData } from './Cwiczenie2/router-data';
import { Cwiczenie3MetaData } from './Cwiczenie3/router-data';
import { MoreOrLessMetaData } from './MoreOrLess/router-data';
import { MoreOrLessAdvancedMetaData } from './MoreOrLessAdvanced/router-data';
import { blockRouterMetaData as MaterialUIBasicElements } from './MaterialUIBasicElements/router-data';
// import { LocalDevAndFetchMetaData } from './LocalDevAndFetch/router-data';
import { blockRouterMetaData as TodoWithServer } from './ToDoWithServer/router-data';
export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  Cwiczenie1MetaData,
  Cwiczenie2MetaData,
  Cwiczenie3MetaData,
  MoreOrLessMetaData,
  MoreOrLessAdvancedMetaData,
  MaterialUIBasicElements,
  // LocalDevAndFetchMetaData,
  TodoWithServer,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
