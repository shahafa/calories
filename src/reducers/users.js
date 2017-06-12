import * as types from '../constants/actionTypes';

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
      });

    case types.UPDATE_USERS_ROLE_SUCCESS:
      lastUsers = action.payload.data.users;
      return Object.assign({}, state, {
        users: action.payload.data.users,
      });
    case types.UPDATE_USERS_ROLE_FAILURE:
      return Object.assign({}, state, {
        users: lastUsers.slice(0),
      });

    case types.DELETE_USER_REQUEST:
      return Object.assign({}, state, {
        users: state.users.filter(user => user.id !== action.meta.userId),
      });
    case types.DELETE_USER_SUCCESS:
      lastUsers = action.payload.data.users;
      return Object.assign({}, state, {
        users: action.payload.data.users,
      });
    case types.DELETE_USER_FAILURE:
      return Object.assign({}, state, {
        users: lastUsers.slice(0),
      });

    default:
      return state;
  }
};

export default meals;
