import * as types from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  meals: [],
};

const meals = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_MEALS_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case types.GET_MEALS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        meals: action.payload.data.meals,
      });
    case types.ADD_MEAL_REQUEST:
      return Object.assign({}, state, {
        meals: [...state.meals, action.meta.meal],
      });
    default:
      return state;
  }
};

export default meals;
