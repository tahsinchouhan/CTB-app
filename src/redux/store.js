import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';

import localSlice from './localSlice';

const middleware = [];

middleware.push(createLogger());

const enhancers = [...middleware];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, localSlice);

export default () => {
  let store = configureStore({
    reducer: persistedReducer,
    middleware: enhancers,
  });
  let persistor = persistStore(store);
  return {store, persistor};
};
