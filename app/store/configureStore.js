'use strict';

import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import devTools from 'remote-redux-devtools';
import promiseMiddleware from 'redux-promise';
import rootReducer from '../reducers';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
const logger = createLogger({
    predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true
});

let middlewares = [
  thunkMiddleware,
  promiseMiddleware
];

if (isDebuggingInChrome) {
  middlewares.push(logger);
}

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares),
    devTools({
      hostname: 'localhost'
    })
  ));

  if (module.hot) {
    // Enable hot module replacement for reducers
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
  }

  return store;
}
