import * as types from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  users: [],
};

let lastUsers = [];

const meals = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case types.GET_USERS_SUCCESS:
      lastUsers = action.payload.data.users;
      return Object.assign({}, state, {
        isLoading: false,
        users: action.payload.data.users,
      });
    case types.GET_USERS_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        users: lastUsers,
        // mealsErrorSnackbarOpen: true,
        // mealsErrorText: 'Something went wrong :( please refresh the page',
      });

    case types.UPDATE_USERS_ROLE_SUCCESS:
      lastUsers = action.payload.data.users;
      return Object.assign({}, state, {
        users: action.payload.data.users,
      });
    case types.UPDATE_USERS_ROLE_FAILURE:
      return Object.assign({}, state, {
        users: lastUsers,
        // mealsErrorSnackbarOpen: true,
        // mealsErrorText: 'Something went wrong :( please refresh the page',
      });
    default:
      return state;
  }
};

export default meals;
