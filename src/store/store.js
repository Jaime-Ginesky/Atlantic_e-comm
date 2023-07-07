import { compose, legacy_createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { RootReducer } from './rootreducer';

const middleWares = [logger]

const composedEnhancers = compose(applyMiddleware(...middleWares))

export const store = legacy_createStore( RootReducer, undefined, composedEnhancers)