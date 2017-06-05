import { combineReducers } from 'redux';
import auth from './auth';
import meals from './meals';

const reducers = combineReducers({
  auth,
  meals,
});

export default reducers;
