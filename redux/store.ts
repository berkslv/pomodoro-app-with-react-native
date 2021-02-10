/**
 * @file Create store for redux, create redux persist and export them
 * @author Berk selvi
 * @license Apache-2.0
 */
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './rootReducer'
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

/**
 * Configuration for redux-persist.
 */
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'timerSettingsReducer',
    'timerReducer',
    'archiveReducer',
    'userInterfaceReducer',
    'goalReducer'
  ],
};

/**
 * Combined root reducer and redux-persist configurations
 */
const persistedReducer = persistReducer(persistConfig, rootReducer);

/**
 * Store was created
 */
const store = createStore(
  persistedReducer,
  applyMiddleware(logger)
);

/**
 * Store given to the persist.
 */
let persistor = persistStore(store);


export {
  store,
  persistor
};
