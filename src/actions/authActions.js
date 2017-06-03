import { RSAA } from 'redux-api-middleware';
import utf8 from 'utf8';
import base64 from 'base-64';
import * as type from './actionTypes';

export const resetAuthStore = () => ({
  type: type.RESET_AUTH_STORE,
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
    types: [type.LOGIN_REQUEST, type.LOGIN_SUCCESS, type.LOGIN_FAILURE],
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
    types: [type.SIGNUP_REQUEST, type.SIGNUP_SUCCESS, type.SIGNUP_FAILURE],
  },
});
