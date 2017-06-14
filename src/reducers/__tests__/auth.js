import authReducer from '../auth';
import * as types from '../../constants/actionTypes';

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(
      authReducer(undefined, {}),
    ).toMatchSnapshot();
  });

  it('should reset the auth state', () => {
    expect(
      authReducer([], {
        type: types.RESET_AUTH_STATE,
      }),
    ).toMatchSnapshot();
  });

  it('should start login request', () => {
    expect(
      authReducer([], {
        type: types.LOGIN_REQUEST,
      }),
    ).toMatchSnapshot();
  });

  it('should set token after successful login', () => {
    expect(
      authReducer([], {
        type: types.LOGIN_SUCCESS,
        payload: {
          code: 1,
          message: 'Login success',
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMmM3YTlhOGItNmE5OS00ODM3LWFmMDQtMjMxNDBlMjA1MWUxIiwiZW1haWwiOiJ1c2VyQG1haWwuY29tIiwicm9sZSI6InVzZXIifSwiaWF0IjoxNDk3NDM1NDE2LCJleHAiOjE0OTc1MjE4MTZ9.439LE9pxyTeXrNEqNaWy8wrp3LZHfbnb4EvHIl1gUSM',
        },
      }),
    ).toMatchSnapshot();
  });

  it('should set error after login failure', () => {
    expect(
      authReducer([], {
        type: types.LOGIN_FAILURE,
        payload: {
          response: {
            code: 5,
            message: 'Invalid email or password',
            errors: [],
          },
        },
      }),
    ).toMatchSnapshot();
  });

  it('should start signup request', () => {
    expect(
      authReducer([], {
        type: types.SIGNUP_REQUEST,
      }),
    ).toMatchSnapshot();
  });

  it('should set token after successful signup', () => {
    expect(
      authReducer([], {
        type: types.SIGNUP_SUCCESS,
        payload: {
          code: 1,
          message: 'Login success',
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMmM3YTlhOGItNmE5OS00ODM3LWFmMDQtMjMxNDBlMjA1MWUxIiwiZW1haWwiOiJ1c2VyQG1haWwuY29tIiwicm9sZSI6InVzZXIifSwiaWF0IjoxNDk3NDM1NDE2LCJleHAiOjE0OTc1MjE4MTZ9.439LE9pxyTeXrNEqNaWy8wrp3LZHfbnb4EvHIl1gUSM',
        },
      }),
    ).toMatchSnapshot();
  });

  it('should set error after signup failure', () => {
    expect(
      authReducer([], {
        type: types.SIGNUP_FAILURE,
        payload: {
          response: {
            code: 6,
            message: 'Account with that email address already exists',
            errors: [],
          },
        },
      }),
    ).toMatchSnapshot();
  });
});
