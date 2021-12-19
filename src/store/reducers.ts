import {combineReducers} from 'redux';
import {heroReducer} from './search-hero/reducers';
import {starshipsReducer} from './search-starships/reducers';

export const rootReducer = combineReducers({
  heroReducer,
  starshipsReducer,
});
