import { RSAA } from 'redux-api-middleware';
import utf8 from 'utf8';
import base64 from 'base-64';
import * as types from './actionTypes';

export const resetAuthStore = () => ({
  type: types.RESET_AUTH_STORE,
});

export const login = (email, password) => ({
  [RSAA]: {
    endpoint: '/login',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      password: base64.encode(utf8.encode(password)),
    }),
    types: [types.LOGIN_REQUEST, types.LOGIN_SUCCESS, types.LOGIN_FAILURE],
  },
});

export const signup = (email, password) => ({
  [RSAA]: {
    endpoint: '/signup',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      password: base64.encode(utf8.encode(password)),
    }),
    types: [types.SIGNUP_REQUEST, types.SIGNUP_SUCCESS, types.SIGNUP_FAILURE],
  },
});
