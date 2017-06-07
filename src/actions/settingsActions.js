import { RSAA } from 'redux-api-middleware';
import store from '../store';
import * as types from './actionTypes';

export const getSettings = () => ({
  [RSAA]: {
    endpoint: '/settings',
    method: 'GET',
    headers: { Authorization: `Bearer ${store.getState().auth.jwtToken}` },
    types: [types.GET_SETTINGS_REQUEST, types.GET_SETTINGS_SUCCESS, types.GET_SETTINGS_FAILURE],
  },
});

export const setSettings = settings => ({
  [RSAA]: {
    endpoint: '/settings',
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${store.getState().auth.jwtToken}`,
    },
    body: JSON.stringify({ settings }),
    types: [
      {
        type: types.SET_SETTINGS_REQUEST,
        meta: { settings },
      },
      types.SET_SETTINGS_SUCCESS,
      types.SET_SETTINGS_FAILURE,
    ],
  },
});

export const closeSettingsErrorSnackbar = () => ({
  type: types.CLOSE_SETTINGS_ERROR_SNACKBAR,
});
