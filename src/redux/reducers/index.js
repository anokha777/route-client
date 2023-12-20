import { combineReducers } from 'redux';
import testReducerData from './test';

const rootReducer = combineReducers({
  testReducerData: testReducerData,
});

export default rootReducer;

