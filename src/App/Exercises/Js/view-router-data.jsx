import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { routerMetaData as blockRouterMetaDataExercisesNumberIf } from './Exercise-numbers-if/router-data';
import { routerMetaData as blockRouterMetaDataJsNumbersTraining } from './JsNumbersTraining/router-data';
import { blockRouterMetaData as EmptyValuesAndComments } from './EmptyValuesAndComments/router-data';
import { blockRouterMetaData as JsArraysBasics } from './JsArraysBasics/router-data';
import { blockRouterMetaData as ExerciseJsFunctions } from './ExerciseJsFunctions/router-data';
import { blockRouterMetaData as Time } from './Time/router-data';
import { HitTheMoleGameMetaData } from './HitTheMoleGame/router-data';
import { MemoGameMetaData } from './MemoGame/router-data';
import { TryCatchAndFinallyMetaData } from './TryCatchAndFinally/router-data'
// import { blockRouterMetaData as HitTheMoleGame } from './HitTheMoleGame/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsTryCatch } from './Exercise-js-try-catch/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsPrototypes } from './Exercise-js-prototypes/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsThisKeyWord } from './Exercise-js-this-key-word/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsPromises } from './Exercise-js-promises/router-data';
import { blockRouterMetaData as blockRouterMetaDataPromises } from './Exercise-js-promises1/router-data';
import { PromiseMethodsTrainingMetaData } from './Exercise-js-promises-methods-training/router-data'




export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataExercisesNumberIf,
  blockRouterMetaDataJsNumbersTraining,
  EmptyValuesAndComments,
  JsArraysBasics,
  ExerciseJsFunctions,
  Time,
  TryCatchAndFinallyMetaData,
  // HitTheMoleGame,
  HitTheMoleGameMetaData,
  MemoGameMetaData,
  blockRouterMetaDataJsTryCatch,
  blockRouterMetaDataJsPrototypes,
  blockRouterMetaDataJsThisKeyWord,
  blockRouterMetaDataJsPromises,
  blockRouterMetaDataPromises,
  PromiseMethodsTrainingMetaData,

];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
