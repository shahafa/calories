import mealsReducer from '../meals';
import * as types from '../../constants/actionTypes';

describe('meals reducer', () => {
  it('should return the initial state', () => {
    expect(
      mealsReducer(undefined, {}),
    ).toMatchSnapshot();
  });

  it('should start meals request', () => {
    expect(
      mealsReducer(undefined, {
        type: types.GET_MEALS_REQUEST,
      }),
    ).toMatchSnapshot();
  });

  it('should set meals after successful GET meals request', () => {
    expect(
      mealsReducer(undefined, {
        type: types.GET_MEALS_SUCCESS,
        payload: {
          data: {
            meals: [{
              id: '7eacca01-5a0e-4956-badc-a60e98eb3cfe',
              date: '2017-06-14T11:04:00Z',
              userEmail: 'user@mail.com',
              meal: 'test meal',
              calories: 100,              
            }],
          },
        },
      }),
    ).toMatchSnapshot();
  });

  it('should set meals loading flag to false after GET meals failure', () => {
    expect(
      mealsReducer(undefined, {
        type: types.GET_MEALS_FAILURE,
      }),
    ).toMatchSnapshot();
  });

  it('should add meal locally before add meal request', () => {
    expect(
      mealsReducer(undefined, {
        type: types.ADD_MEAL_REQUEST,
        meta: {
          meal: {
            id: '7eacca01-5a0e-4956-badc-a60e98eb3cfe',
            date: '2017-06-14T11:04:00Z',
            userEmail: 'user@mail.com',
            meal: 'test meal',
            calories: 100,
          },
        },
      }),
    ).toMatchSnapshot();
  });

  it('should update meals after successful add meal request', () => {
    expect(
      mealsReducer(undefined, {
        type: types.ADD_MEAL_SUCCESS,
        payload: {
          data: {
            meals: [{
              id: '7eacca01-5a0e-4956-badc-a60e98eb3cfe',
              date: '2017-06-14T11:04:00Z',
              userEmail: 'user@mail.com',
              meal: 'test meal',
              calories: 100,
            }],
          },
        },
      }),
    ).toMatchSnapshot();
  });

  it('should revert meals list after add meal failure', () => {
    expect(
      mealsReducer(undefined, {
        type: types.ADD_MEAL_FAILURE,
      }),
    ).toMatchSnapshot();
  });

  it('should delete meal locally before delete meal request', () => {
    expect(
      mealsReducer(undefined, {
        type: types.DELETE_MEAL_REQUEST,
        meta: {
          mealId: '7eacca01-5a0e-4956-badc-a60e98eb3cfe',
        },
      }),
    ).toMatchSnapshot();
  });

  it('should update meals after successful delete meal request', () => {
    expect(
      mealsReducer(undefined, {
        type: types.DELETE_MEAL_SUCCESS,
        payload: {
          data: {
            meals: [],
          },
        },
      }),
    ).toMatchSnapshot();
  });

  it('should revert meals list after delete meal failure', () => {
    expect(
      mealsReducer(undefined, {
        type: types.DELETE_MEAL_FAILURE,
      }),
    ).toMatchSnapshot();
  });

  it('should update meal locally before edit meal request', () => {
    expect(
      mealsReducer(undefined, {
        type: types.EDIT_MEAL_REQUEST,
        meta: {
          meal: {
            id: '7eacca01-5a0e-4956-badc-a60e98eb3cfe',
            date: '2017-06-14T11:04:00Z',
            userEmail: 'user@mail.com',
            meal: 'test meal',
            calories: 105,
          },
        },
      }),
    ).toMatchSnapshot();
  });

  it('should update meals after successful edit meal request', () => {
    expect(
      mealsReducer(undefined, {
        type: types.EDIT_MEAL_SUCCESS,
        payload: {
          data: {
            meals: [{
              id: '7eacca01-5a0e-4956-badc-a60e98eb3cfe',
              date: '2017-06-14T11:04:00Z',
              userEmail: 'user@mail.com',
              meal: 'test meal',
              calories: 105,
            }],
          },
        },
      }),
    ).toMatchSnapshot();
  });

  it('should revert meals list after edit meal failure', () => {
    expect(
      mealsReducer(undefined, {
        type: types.EDIT_MEAL_FAILURE,
      }),
    ).toMatchSnapshot();
  });

  it('should set filter', () => {
    expect(
      mealsReducer(undefined, {
        type: types.SET_FILTER,
        filter: {
          fromDate: '2017-06-11T21:00:00.000Z',
          fromTime: '2017-06-14T11:44:18.187Z',
          toDate: '2017-06-14T11:44:19.930Z',
          toTime: '2017-06-14T11:44:23.220Z',
        },
      }),
    ).toMatchSnapshot();
  });
});
