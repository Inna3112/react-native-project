import thunkMiddleware from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './reducers';

import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().prepend(thunkMiddleware),
  });
  let persistor = persistStore(store);
  return {store, persistor};
};

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware().prepend(thunkMiddleware),
// });

export type AppRootStateType = ReturnType<typeof rootReducer>;
