import { configureStore } from '@reduxjs/toolkit';

// import { compose, legacy_createStore, applyMiddleware } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';


import { rootReducer } from './rootreducer';

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(Boolean);

// const middleWares = [process.env.NODE_ENV === 'development' && logger, thunk,].filter(Boolean);

// const composeEnhancer = 
// (process.env.NODE_ENV !== 'production' && 
// window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


// const persistConfig = {
//     key:'root',
//     storage,
//     whitelist: ['cart'],
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer);


// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares))

// export const store = legacy_createStore( persistedReducer, undefined, composedEnhancers);
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleWares),
})

// export const persistor = persistStore(store);