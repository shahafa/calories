import * as types from '../constants/actionTypes';

const initialState = {
  isLoading: false,
  meals: [],
  filter: {
    showAll: true,
    fromDate: null,
    fromTime: null,
    toDate: null,
    toTime: null,
  },
};

let lastMeals = [];

const meals = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_MEALS_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case types.GET_MEALS_SUCCESS:
      lastMeals = action.payload.data.meals;
      return Object.assign({}, state, {
        isLoading: false,
        meals: action.payload.data.meals,
      });
    case types.GET_MEALS_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
      });

    case types.ADD_MEAL_REQUEST:
      return Object.assign({}, state, {
        meals: [...state.meals, action.meta.meal],
      });
    case types.ADD_MEAL_SUCCESS:
      lastMeals = action.payload.data.meals;
      return Object.assign({}, state, {
        meals: action.payload.data.meals,
      });
    case types.ADD_MEAL_FAILURE:
      return Object.assign({}, state, {
        meals: lastMeals.slice(0),
      });

    case types.DELETE_MEAL_REQUEST:
      return Object.assign({}, state, {
        meals: state.meals.filter(meal => meal.id !== action.meta.mealId),
      });
    case types.DELETE_MEAL_SUCCESS:
      lastMeals = action.payload.data.meals;
      return Object.assign({}, state, {
        meals: action.payload.data.meals,
      });
    case types.DELETE_MEAL_FAILURE:
      return Object.assign({}, state, {
        meals: lastMeals.slice(0),
      });

    case types.EDIT_MEAL_REQUEST:
      return Object.assign({}, state, {
        meals: state.meals.map(meal => (meal.id !== action.meta.meal.id ? meal : action.meta.meal)),
      });
    case types.EDIT_MEAL_SUCCESS:
      lastMeals = action.payload.data.meals;
      return Object.assign({}, state, {
        meals: action.payload.data.meals,
      });
    case types.EDIT_MEAL_FAILURE:
      return Object.assign({}, state, {
        meals: lastMeals.slice(0),
      });

    case types.SET_FILTER:
      return Object.assign({}, state, { filter: action.filter });
    default:
      return state;
  }
};

export default meals;
