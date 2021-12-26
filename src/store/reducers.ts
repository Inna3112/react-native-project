import {combineReducers} from 'redux';
import {heroReducer} from './search-hero/reducers';
import {starshipsReducer} from './search-starships/reducers';
import {appReducer} from './app/reducers';

export const rootReducer = combineReducers({
  appReducer,
  heroReducer,
  starshipsReducer,
});
