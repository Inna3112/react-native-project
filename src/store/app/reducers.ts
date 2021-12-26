import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CustomDarkTheme, CustomLightTheme} from '../../App';

const slice = createSlice({
  name: 'app',
  initialState: {
    theme: null as ThemeType,
  },
  reducers: {
    setTheme(state, action: PayloadAction<{theme: ThemeType}>) {
      state.theme = action.payload.theme;
    },
  },
});

export const appReducer = slice.reducer;
export const {setTheme} = slice.actions;

export type ThemeType = typeof CustomLightTheme | typeof CustomDarkTheme | null;
