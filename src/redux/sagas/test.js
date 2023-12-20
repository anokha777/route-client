import axios from 'axios';
import {call , put , takeEvery} from 'redux-saga/effects';
import * as types from '../types';

function getTestApi(){
  return axios
    .get(`${import.meta.env.REACT_APP_API_URL}/health`)
    .then((response)=>{
      return Promise.resolve(response.data);
    })
    .catch((error)=>{
      return Promise.reject(error.msg);
    });
}

function* testDataFun(){
  try{ 
    const res =  yield call(getTestApi);
    console.log('res==',res);
    if(res){
      yield put({
        type:types.GET_TEST_SUCCESS,
        message: res 
      });

    }else{
      yield put({
        type:types.GET_TEST_ERROR,
        message: "SOME ERROR IN API"
      });
    }
  }catch(e){
    yield put({
      type:types.GET_TEST_ERROR,
      message: "error occurred.."
    });

  }
    
}

export function*  testSaga(){
  yield takeEvery(types.GET_TEST,testDataFun);
}
