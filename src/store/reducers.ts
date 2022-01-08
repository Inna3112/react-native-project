import {combineReducers} from 'redux';
import {heroReducer} from './searchHeroesReducers';
import {starshipsReducer} from './searchStarshipsReducers';
import {appReducer} from './appReducers';

export const rootReducer = combineReducers({
  appReducer,
  heroReducer,
  starshipsReducer,
});
