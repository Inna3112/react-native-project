import {createSlice, Dispatch, PayloadAction} from '@reduxjs/toolkit';
import {ItemType, starWarsAPI} from '../../api/api';

const slice = createSlice({
  name: 'hero',
  initialState: {
    heroes: [] as ItemType[] | null,
    totalHeroesCount: 0,
  },
  reducers: {
    setHeroes(state, action: PayloadAction<{heroes: ItemType[]}>) {
      state.heroes = action.payload.heroes;
    },
    setTotalHeroesCount(
      state,
      action: PayloadAction<{totalHeroesCount: number}>,
    ) {
      state.totalHeroesCount = action.payload.totalHeroesCount;
    },
  },
});

export const heroReducer = slice.reducer;
export const {setHeroes, setTotalHeroesCount} = slice.actions;

// thunks
export const getHeroes = () => async (dispatch: Dispatch) => {
  try {
    const res = await starWarsAPI.getHeroes();
    const peoplesResponse = res.data.results;
    dispatch(setHeroes({heroes: peoplesResponse}));
    dispatch(setTotalHeroesCount({totalHeroesCount: res.data.total_records}));
  } catch (e) {
    throw new Error('Some error occurred...');
  }
};
