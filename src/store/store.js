import { compose, legacy_createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { RootReducer } from './rootreducer';

const persistConfig = {
    key:'root',
    storage,
    blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, RootReducer);



const middlewares = [process.env.NODE_ENV === 'development' && logger]

const composedEnhancers = compose(applyMiddleware(...middlewares))

export const store = legacy_createStore( persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);