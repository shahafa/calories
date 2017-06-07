import * as types from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  settings: {},
  settingsErrorSnackbarOpen: false,
  settingsErrorText: '',
};

let lastSettings = {};

const settings = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SETTINGS_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case types.GET_SETTINGS_SUCCESS:
      lastSettings = action.payload.data;
      return Object.assign({}, state, {
        isLoading: false,
        settings: action.payload.data,
      });
    case types.GET_SETTINGS_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        settings: lastSettings,
        settingsErrorSnackbarOpen: true,
        settingsErrorText: 'Something went wrong :( please refresh the page',
      });

    case types.SET_SETTINGS_REQUEST:
      return Object.assign({}, state, {
        settings: action.meta.settings,
      });
    case types.SET_SETTINGS_SUCCESS:
      lastSettings = action.payload.data;
      return Object.assign({}, state, {
        settings: action.payload.data,
      });
    case types.SET_SETTINGS_FAILURE:
      return Object.assign({}, state, {
        settings: lastSettings,
        settingsErrorSnackbarOpen: true,
        settingsErrorText: 'Something went wrong :( please try to update settings again',
      });

    case types.CLOSE_SETTINGS_ERROR_SNACKBAR: {
      return Object.assign({}, state, {
        settingsErrorSnackbarOpen: false,
        settingsErrorText: '',
      });
    }
    default:
      return state;
  }
};

export default settings;
