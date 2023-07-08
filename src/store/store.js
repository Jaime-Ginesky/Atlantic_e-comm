import { compose, legacy_createStore, applyMiddleware } from 'redux';

import { RootReducer } from './rootreducer';
import logger from 'redux-logger';

const middlewares = [logger]

const composedEnhancers = compose(applyMiddleware(...middlewares))

export const store = legacy_createStore( RootReducer, undefined, composedEnhancers)