import thunkMiddleware from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './reducers';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().prepend(thunkMiddleware),
});

export type AppRootStateType = ReturnType<typeof rootReducer>;