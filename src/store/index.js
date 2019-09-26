import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'

import { rootReducer, rootEpic } from 'reducers';

import reduxPersistConfig from './redux-persist-config';

export const history = createBrowserHistory();

const epicMiddleware = createEpicMiddleware();

const persistConfig = reduxPersistConfig;

const persistedReducer = persistReducer(persistConfig, rootReducer(history))

const initialState = {};
const enhancers = [];
const middleware = [
  thunk,
  routerMiddleware(history),
  epicMiddleware
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  persistedReducer,
  initialState,
  composedEnhancers
)
export const persistor = persistStore(store);

epicMiddleware.run(rootEpic);

export default store;
