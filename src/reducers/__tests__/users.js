import usersReducer from '../users';
import * as types from '../../constants/actionTypes';

describe('users reducer', () => {
  it('should return the initial state', () => {
    expect(
      usersReducer(undefined, {}),
    ).toMatchSnapshot();
  });

  it('should start get users request', () => {
    expect(
      usersReducer(undefined, {
        type: types.GET_USERS_REQUEST,
      }),
    ).toMatchSnapshot();
  });

  it('should set users after successful get users request', () => {
    expect(
      usersReducer(undefined, {
        type: types.GET_USERS_SUCCESS,
        payload: {
          data: {
            users: [{
              id: '9e65644e-e326-48d9-be7d-7d13f8b36992',
              email: 'user@mail.com',
              role: 'user',
            }],
          },
        },
      }),
    ).toMatchSnapshot();
  });

  it('should set users loading flag to false after get users failure', () => {
    expect(
      usersReducer(undefined, {
        type: types.GET_USERS_FAILURE,
      }),
    ).toMatchSnapshot();
  });

  it('should update user role after successful update user role request', () => {
    expect(
      usersReducer(undefined, {
        type: types.UPDATE_USERS_ROLE_SUCCESS,
        payload: {
          data: {
            users: [{
              id: '9e65644e-e326-48d9-be7d-7d13f8b36992',
              email: 'user@mail.com',
              role: 'userManager',
            }],
          },
        },
      }),
    ).toMatchSnapshot();
  });

  it('should revert users role after update user role failure', () => {
    expect(
      usersReducer(undefined, {
        type: types.UPDATE_USERS_ROLE_FAILURE,
      }),
    ).toMatchSnapshot();
  });

  it('should delete user locally before delete user request', () => {
    expect(
      usersReducer(undefined, {
        type: types.DELETE_USER_REQUEST,
        meta: {
          userId: '9e65644e-e326-48d9-be7d-7d13f8b36992',
        },
      }),
    ).toMatchSnapshot();
  });

  it('should update users list after successful delete user request', () => {
    expect(
      usersReducer(undefined, {
        type: types.DELETE_USER_SUCCESS,
        payload: {
          data: {
            users: [{
              id: '9e65644e-e326-48d9-be7d-7d13f8b36992',
              email: 'user@mail.com',
              role: 'user',
            }],
          },
        },
      }),
    ).toMatchSnapshot();
  });

  it('should revert users list after delete user failure', () => {
    expect(
      usersReducer(undefined, {
        type: types.DELETE_USER_FAILURE,
      }),
    ).toMatchSnapshot();
  });
});
