import {createSlice, Dispatch, PayloadAction} from '@reduxjs/toolkit';
import {ItemType, starWarsAPI} from '../api/api';

const slice = createSlice({
  name: 'starships',
  initialState: {
    starships: [] as ItemType[] | null,
    isLoading: false,
    totalStarshipsCount: 0,
  },
  reducers: {
    setStarships(state, action: PayloadAction<{starships: ItemType[]}>) {
      state.starships = action.payload.starships;
    },
    setIsLoading(state, action: PayloadAction<{isLoading: boolean}>) {
      state.isLoading = action.payload.isLoading;
    },
    setTotalStarshipsCount(
      state,
      action: PayloadAction<{totalStarshipsCount: number}>,
    ) {
      state.totalStarshipsCount = action.payload.totalStarshipsCount;
    },
  },
});

export const starshipsReducer = slice.reducer;
export const {setStarships, setIsLoading, setTotalStarshipsCount} =
  slice.actions;

// thunks
export const getStarships = () => async (dispatch: Dispatch) => {
  dispatch(setIsLoading({isLoading: true}));
  try {
    const res = await starWarsAPI.getStarships();
    const starshipsResponse = res.data.results;
    dispatch(setIsLoading({isLoading: false}));
    dispatch(setStarships({starships: starshipsResponse}));
    dispatch(
      setTotalStarshipsCount({totalStarshipsCount: res.data.total_records}),
    );
  } catch (e) {
    dispatch(setIsLoading({isLoading: false}));
    throw new Error('Some error occurred...');
  }
};
