import { RSAA } from 'redux-api-middleware';
import store from '../store';
import * as types from './actionTypes';

export const getUsers = () => ({
  [RSAA]: {
    endpoint: '/users',
    method: 'GET',
    headers: { Authorization: `Bearer ${store.getState().auth.jwtToken}` },
    types: [types.GET_USERS_REQUEST, types.GET_USERS_SUCCESS, types.GET_USERS_FAILURE],
  },
});

export const updateUsersRole = users => ({
  [RSAA]: {
    endpoint: '/users',
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${store.getState().auth.jwtToken}`,
    },
    body: JSON.stringify({ users }),
    types: [
      types.UPDATE_USERS_ROLE_REQUEST,
      types.UPDATE_USERS_ROLE_SUCCESS,
      types.UPDATE_USERS_ROLE_FAILURE,
    ],
  },
});
