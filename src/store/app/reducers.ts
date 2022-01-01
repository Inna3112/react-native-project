import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CustomLightTheme, CustomDarkTheme} from '../../constants';

const slice = createSlice({
  name: 'app',
  initialState: {
    theme: CustomLightTheme as ThemeType,
  },
  reducers: {
    setTheme(state, action: PayloadAction<{theme: ThemeType}>) {
      state.theme = action.payload.theme;
    },
  },
});

export const appReducer = slice.reducer;
export const {setTheme} = slice.actions;

//types
export type ThemeType =
  | typeof CustomLightTheme
  | typeof CustomDarkTheme
  | undefined;
