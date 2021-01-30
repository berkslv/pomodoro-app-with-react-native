/*
  Amaç: redux için store oluşturma. & kalıcı state oluşturma. & bunları export etmek.
  Son düzenlenme: 30/01/2021
  Son düzenleyen: berk selvi
*/
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './rootReducer'
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

// Kalıcı state için config.
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'timerReducer',
    'archiveReducer',
    'timerSettings',
    'userInterface',
    'goalReducer'
  ],
};

// Root reducer ve Persist configleri birleştirildi.
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store oluşturuldu.
const store = createStore(
  persistedReducer,
  applyMiddleware(logger)
);

// Store kalıcı state için persiste gönderildi.
let persistor = persistStore(store);


// Export işlemi yapıldı.
export {
  store,
  persistor
};
