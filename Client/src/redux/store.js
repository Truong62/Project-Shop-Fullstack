import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productReducer from './Slice/cartSlice';

const persistConfig = {
  key: 'root',
  storage,

};

const persistedReducer = persistReducer(persistConfig, productReducer);

const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
