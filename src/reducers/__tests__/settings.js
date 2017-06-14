import settingsReducer from '../settings';
import * as types from '../../constants/actionTypes';

describe('settings reducer', () => {
  it('should return the initial state', () => {
    expect(
      settingsReducer(undefined, {}),
    ).toMatchSnapshot();
  });

  it('should start get settings request', () => {
    expect(
      settingsReducer(undefined, {
        type: types.GET_SETTINGS_REQUEST,
      }),
    ).toMatchSnapshot();
  });

  it('should set settings after successful get settings request', () => {
    expect(
      settingsReducer(undefined, {
        type: types.GET_SETTINGS_SUCCESS,
        payload: {
          data: {
            numberOfCaloriesPerDay: 35,
          },
        },
      }),
    ).toMatchSnapshot();
  });

  it('should set seetings loading flag to false after get settings failure', () => {
    expect(
      settingsReducer(undefined, {
        type: types.GET_SETTINGS_FAILURE,
      }),
    ).toMatchSnapshot();
  });

  it('should update settings locally before update settings request', () => {
    expect(
      settingsReducer(undefined, {
        type: types.UPDATE_SETTINGS_REQUEST,
        meta: {
          settings: {
            numberOfCaloriesPerDay: 35,
          },
        },
      }),
    ).toMatchSnapshot();
  });

  it('should update settings after successful update settings request', () => {
    expect(
      settingsReducer(undefined, {
        type: types.UPDATE_SETTINGS_SUCCESS,
        payload: {
          data: {
            numberOfCaloriesPerDay: 35,
          },
        },
      }),
    ).toMatchSnapshot();
  });

  it('should revert settings after update settings failure', () => {
    expect(
      settingsReducer(undefined, {
        type: types.UPDATE_SETTINGS_FAILURE,
      }),
    ).toMatchSnapshot();
  });
});
