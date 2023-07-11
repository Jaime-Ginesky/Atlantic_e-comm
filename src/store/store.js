import { compose, legacy_createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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

const persistConfig = {
    key:'root',
    storage,
    blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, RootReducer);



const middlewares = [loggerMiddleware]

const composedEnhancers = compose(applyMiddleware(...middlewares))

export const store = legacy_createStore( persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);