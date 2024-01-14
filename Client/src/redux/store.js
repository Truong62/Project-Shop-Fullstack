import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productReducer from './Slice/cartSlice';
import persistedReducerLike from './Slice/likeSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, productReducer);
const persistedReducerLikes = persistReducer(persistConfig, persistedReducerLike);

const store = configureStore({
  reducer: {
    cart: persistedReducer,
    like: persistedReducerLikes
  },
});

const persistor = persistStore(store);

export { store, persistor };
