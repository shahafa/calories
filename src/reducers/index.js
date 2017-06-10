import { combineReducers } from 'redux';
import auth from './auth';
import meals from './meals';
import users from './users';
import settings from './settings';
import snackBar from './snackBar';

const reducers = combineReducers({
  auth,
  meals,
  users,
  settings,
  snackBar,
});

export default reducers;
