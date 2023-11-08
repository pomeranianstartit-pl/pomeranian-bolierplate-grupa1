import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

import { EventsMetaData } from './Events/router-data';
import { hitTheMoleMetaData } from './HitTheMole/router-data';
import { MemoGameMetaData } from './Memo/router-data';
import { ToDoWithServerMetaData } from './ToDoWithServer/router-data';
import { BasicFormsMetaData } from './BasicForms/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  EventsMetaData,
  hitTheMoleMetaData,
  MemoGameMetaData,
  ToDoWithServerMetaData,
  BasicFormsMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
