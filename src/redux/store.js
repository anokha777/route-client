import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/index.js';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';

const sagaMiddleWare = createSagaMiddleware();
const store = compose(
  applyMiddleware(sagaMiddleWare),
  // window.devToolsExtension && window.devToolsExtension(),
  window.REDUX_DEVTOOLS_EXTENSION
    ? window.REDUX_DEVTOOLS_EXTENSION()
    : f => f
)(createStore)(rootReducer);

sagaMiddleWare.run(rootSaga);

export default store;