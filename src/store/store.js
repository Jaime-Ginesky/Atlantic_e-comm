import { compose, legacy_createStore, applyMiddleware } from 'redux';

import { RootReducer } from './rootreducer';


const loggerMiddleware = (store) => (next) => (action) => {
    if(!action.type){
        return next(action);
    }
    console.log('type', action.type)
   console.log('payload', action.payload);
    console.log('currentState', store.getState());

    next(action);

    console.log('next state', store.getState());
}

const middlewares = [loggerMiddleware]

const composedEnhancers = compose(applyMiddleware(...middlewares))

export const store = legacy_createStore( RootReducer, undefined, composedEnhancers)