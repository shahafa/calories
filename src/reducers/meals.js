import * as types from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  meals: [],
  mealsErrorSnackbarOpen: false,
  mealsErrorText: '',
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
        mealsErrorSnackbarOpen: true,
        mealsErrorText: 'Something went wrong :( please refresh the page',
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
        mealsErrorSnackbarOpen: true,
        mealsErrorText: 'Failed to add meal. please try again',
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
        mealsErrorSnackbarOpen: true,
        mealsErrorText: 'Failed to delete meal. please try again',
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
        mealsErrorSnackbarOpen: true,
        mealsErrorText: 'Failed to update meal. please try again',
      });

    case types.CLOSE_MEALS_ERROR_SNACKBAR: {
      return Object.assign({}, state, {
        mealsErrorSnackbarOpen: false,
        mealsErrorText: '',
      });
    }
    default:
      return state;
  }
};

export default meals;
