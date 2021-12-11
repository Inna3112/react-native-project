import {createSlice, Dispatch, PayloadAction} from '@reduxjs/toolkit';
import {HeroType, starWarsAPI} from '../../api/api';

const slice = createSlice({
  name: 'hero',
  initialState: {
    heroes: [] as HeroType[] | null,
    error: '',
    totalHeroesCount: 0,
  },
  reducers: {
    setHeroes(state, action: PayloadAction<{heroes: HeroType[]}>) {
      //в этом случае обязательно нужно return, потому что если присвоить state - перезатрем draftState!!!
      state.heroes = action.payload.heroes;
    },
    setError(state, action: PayloadAction<{error: string}>) {
      state.error = action.payload.error;
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
export const {setHeroes, setError, setTotalHeroesCount} = slice.actions;

// thunks
export const getHeroes = (heroName?: string) => async (dispatch: Dispatch) => {
  if (heroName && heroName.length === 1) {
    dispatch(setError({error: 'Name must be longer, then 1 symbol'}));
  } else {
    try {
      const res = await starWarsAPI.getHeroes(heroName);
      const peoplesResponse = res.data.results;
      dispatch(setHeroes({heroes: peoplesResponse}));
      dispatch(setTotalHeroesCount({totalHeroesCount: res.data.count}));
      try {
        if (!peoplesResponse?.length) {
          setError({error: 'The hero does not exist!'});
        }
      } catch (e) {
        // throw new Error('Some error occurred...')
      }
    } catch (e) {
      throw new Error('Some error occurred...');
    }
  }
};
