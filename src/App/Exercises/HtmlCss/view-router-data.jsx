import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './ImageFiles/router-data';

import { blockRouterMetaData as cssColorsMetaData } from './Colors/router-data';

import { blockRouterMetaData as ImageFilesMetaData } from './ImageFiles/router-data';

import { blockRouterMetaData as BackgroundsMetaData } from './Backgrounds/router-data';

import { blockRouterMetaData as CSSFilterMetaData } from './CSSFilter/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  ImageFilesMetaData,
  BackgroundsMetaData,
  cssColorsMetaData,
  CSSFilterMetaData,
];

export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
