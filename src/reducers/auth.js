import jwtDecode from 'jwt-decode';
import * as type from '../actions/actionTypes';

const initialState = {
  isAuthenticating: false,
  isAuthenticated: false,
  isSigningUp: false,
  jwtToken: null,
  user: null,
  errorCode: null,
  errorText: '',
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case type.RESET_AUTH_STORE:
      return Object.assign({}, initialState);
    case type.LOGIN_REQUEST:
      return Object.assign({}, state, {
        isAuthenticating: true,
      });
    case type.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticating: false,
        isAuthenticated: true,
        jwtToken: action.payload.token,
        user: jwtDecode(action.payload.token).user,
      });
    case type.LOGIN_FAILURE:
      return Object.assign({}, state, {
        error: action.payload.response ? action.payload.response.code : null,
        errorText: action.payload.response ? action.payload.response.message : 'Something bad happened. Please try again later',
        isAuthenticating: false,
        isAuthenticated: false,
        jwtToken: null,
        user: null,
      });
    case type.SIGNUP_REQUEST:
      return Object.assign({}, state, {
        isSigningUp: true,
      });
    case type.SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        isSigningUp: false,
        isAuthenticated: true,
        jwtToken: action.payload.token,
        user: jwtDecode(action.payload.token).user,
      });
    case type.SIGNUP_FAILURE:
      return Object.assign({}, state, {
        error: action.payload.response ? action.payload.response.code : null,
        errorText: action.payload.response ? action.payload.response.message : 'Something bad happened, Please try again later',
        isSigningUp: false,
        isAuthenticated: false,
        jwtToken: null,
        user: null,
      });
    default:
      return state;
  }
};

export default auth;
