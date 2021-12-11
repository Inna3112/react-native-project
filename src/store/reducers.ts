import {combineReducers} from 'redux';
import {heroReducer} from './search-hero/reducers';

export const rootReducer = combineReducers({
  heroReducer,
});
