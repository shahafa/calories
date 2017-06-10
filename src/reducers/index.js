import { combineReducers } from 'redux';
import auth from './auth';
import meals from './meals';
import users from './users';
import settings from './settings';

const reducers = combineReducers({
  auth,
  meals,
  users,
  settings,
});

export default reducers;
