import { combineReducers } from 'redux';
import auth from './auth';
import meals from './meals';
import settings from './settings';

const reducers = combineReducers({
  auth,
  meals,
  settings,
});

export default reducers;
