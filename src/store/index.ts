import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage/session';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { rootReducers } from './reducers';

const persistConfig = {
  key: 'root-twitter',
  storage,
  // whitelist: ['sessions'],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);
const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});
window.globalStore = Store;
export const Persistor = persistStore(Store);
export type RootApplicationState = ReturnType<typeof Store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch;

export default Store;
