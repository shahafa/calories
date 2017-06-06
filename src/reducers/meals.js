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
    case types.ADD_MEAL_SUCCESS:
      return Object.assign({}, state, {
        meals: action.payload.data.meals,
      });
    case types.DELETE_MEAL_REQUEST:
      return Object.assign({}, state, {
        meals: state.meals.filter(meal => meal.id !== action.meta.mealId),
      });
    case types.DELETE_MEAL_SUCCESS:
      return Object.assign({}, state, {
        meals: action.payload.data.meals,
      });
    case types.EDIT_MEAL_REQUEST:
      return Object.assign({}, state, {
        meals: state.meals.map(meal => (meal.id !== action.meta.meal.id ? meal : action.meta.meal)),
      });
    case types.EDIT_MEAL_SUCCESS:
      return Object.assign({}, state, {
        meals: action.payload.data.meals,
      });
    default:
      return state;
  }
};

export default meals;
