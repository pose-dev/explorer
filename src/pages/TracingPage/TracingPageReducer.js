import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import { combinedEpic as tracingEpic, combinedReducer as tracingReducer } from './components/Tracing/TracingReducer';

export const combinedEpic = combineEpics(
  tracingEpic
);

export const combinedReducer = combineReducers({
  tracing: tracingReducer,
})
