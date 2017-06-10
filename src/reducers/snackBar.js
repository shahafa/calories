import * as types from '../actions/actionTypes';

const initialState = {
  isOpen: false,
  message: '',
};

const snackBar = (state = initialState, action) => {
  switch (action.type) {
    case types.CLOSE_SNACKBAR:
      return Object.assign({}, state, {
        isOpen: false,
        message: '',
      });
    case types.GET_MEALS_FAILURE:
      return Object.assign({}, state, {
        isOpen: true,
        message: 'Something went wrong :( please refresh the page',
      });
    case types.ADD_MEAL_FAILURE:
      return Object.assign({}, state, {
        isOpen: true,
        message: 'Failed to add meal. please try again',
      });
    case types.DELETE_MEAL_FAILURE:
      return Object.assign({}, state, {
        isOpen: true,
        message: 'Failed to delete meal. please try again',
      });
    case types.EDIT_MEAL_FAILURE:
      return Object.assign({}, state, {
        isOpen: true,
        message: 'Failed to update meal. please try again',
      });
    case types.GET_SETTINGS_FAILURE:
      return Object.assign({}, state, {
        isOpen: true,
        message: 'Something went wrong :( please refresh the page',
      });
    case types.SET_SETTINGS_SUCCESS:
      return Object.assign({}, state, {
        isOpen: true,
        message: 'Settings updated successfully',
      });
    case types.SET_SETTINGS_FAILURE:
      return Object.assign({}, state, {
        isOpen: true,
        message: 'Something went wrong :( please try to update settings again',
      });
    case types.GET_USERS_FAILURE:
      return Object.assign({}, state, {
        isOpen: true,
        message: 'Something went wrong :( please refresh the page',
      });
    case types.UPDATE_USERS_ROLE_SUCCESS:
      return Object.assign({}, state, {
        isOpen: true,
        message: 'Users updated successfully',
      });
    case types.UPDATE_USERS_ROLE_FAILURE:
      return Object.assign({}, state, {
        isOpen: true,
        message: 'Failed to update users. please try again',
      });
    default:
      return state;
  }
};

export default snackBar;
