import AsyncStorage from '@react-native-async-storage/async-storage';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createLogger } from 'redux-logger';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';

import localSlice from './localSlice';

const middleware = [];

middleware.push(createLogger());

const enhancers = [...middleware];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  local: localSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: enhancers,
  });
  const persistor = persistStore(store);
  return { store, persistor };
};
