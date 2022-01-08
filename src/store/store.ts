import thunkMiddleware from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './reducers';

import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({serializableCheck: false}).prepend(thunkMiddleware),
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
