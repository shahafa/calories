import { RSAA } from 'redux-api-middleware';
import store from '../store';
import * as types from '../constants/actionTypes';

export const getMeals = () => ({
  [RSAA]: {
    endpoint: '/meals',
    method: 'GET',
    headers: { Authorization: `Bearer ${store.getState().auth.jwtToken}` },
    types: [types.GET_MEALS_REQUEST, types.GET_MEALS_SUCCESS, types.GET_MEALS_FAILURE],
  },
});

export const addMeal = meal => ({
  [RSAA]: {
    endpoint: '/meals',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${store.getState().auth.jwtToken}`,
    },
    body: JSON.stringify({ meal }),
    types: [
      {
        type: types.ADD_MEAL_REQUEST,
        meta: { meal },
      },
      types.ADD_MEAL_SUCCESS,
      types.ADD_MEAL_FAILURE,
    ],
  },
});

export const deleteMeal = mealId => ({
  [RSAA]: {
    endpoint: `/meals/${mealId}`,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${store.getState().auth.jwtToken}`,
    },
    types: [
      {
        type: types.DELETE_MEAL_REQUEST,
        meta: { mealId },
      },
      types.DELETE_MEAL_SUCCESS,
      types.DELETE_MEAL_FAILURE,
    ],
  },
});

export const editMeal = meal => ({
  [RSAA]: {
    endpoint: `/meals/${meal.id}`,
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${store.getState().auth.jwtToken}`,
    },
    body: JSON.stringify({ meal }),
    types: [
      {
        type: types.EDIT_MEAL_REQUEST,
        meta: { meal },
      },
      types.EDIT_MEAL_SUCCESS,
      types.EDIT_MEAL_FAILURE,
    ],
  },
});

export const setFilter = filter => ({
  type: types.SET_FILTER,
  filter,
});
