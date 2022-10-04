import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import covidDataReducer from './reducer';

const store = createStore(
  covidDataReducer,
  applyMiddleware(logger, thunk),
);

export default store;
