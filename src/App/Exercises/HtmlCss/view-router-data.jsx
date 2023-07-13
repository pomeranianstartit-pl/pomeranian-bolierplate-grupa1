import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as ColorsblockRouterMetaData } from './Colors/router-data';
import { blockRouterMetaData as ImageFilesblockRouterMetaData } from './ImageFiles/router-data';
import { blockRouterMetaData as BackgroundsblockRouterMetaData } from './Backgrounds/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  ColorsblockRouterMetaData,
  ImageFilesblockRouterMetaData,
  BackgroundsblockRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
