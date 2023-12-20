import * as type from '../types';

export function getTestData(){
  console.log('getTestData action has been called');
  return{
    type: type.GET_TEST,
  };
}
