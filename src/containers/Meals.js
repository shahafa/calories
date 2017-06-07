import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import Snackbar from 'material-ui/Snackbar';
import { getMeals, addMeal, deleteMeal, editMeal, closeMealsErrorSnackbar } from '../actions/mealsActions';
import { getSettings } from '../actions/settingsActions';
import { mealsGroupByDaySelector } from '../selectors';
import Main from '../components/Main';
import DailyMealsCard from '../components/DailyMealsCard';
import AddMealButton from '../components/AddMealButton';
import AddMealDialog from '../components/AddMealDialog';
import DeleteMealDialog from '../components/DeleteMealDialog';
import NoMeals from '../components/NoMeals';
import Loading from '../components/Loading';

class Meals extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    dailyMealsList: PropTypes.array.isRequired,
    mealsErrorSnackbarOpen: PropTypes.bool.isRequired,
    mealsErrorText: PropTypes.string.isRequired,
    numberOfCaloriesPerDay: PropTypes.number,
  }

  state = {
    addMealDialogOpen: false,
    deleteMealDialogOpen: false,
    mealToDelete: null,
    mealToEdit: null,
    mealsActionError: false,
    mealsActionErrorText: '',
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getMeals());
    dispatch(getSettings());
  }

  handleAddMealClick = (id, date, time, meal, calories) => {
    const { dispatch } = this.props;

    this.setState({ addMealDialogOpen: false });

    dispatch(addMeal({
      id,
      date: moment({
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate(),
        hours: time.getHours(),
        minutes: time.getMinutes(),
      }).utc().format(),
      meal,
      calories,
    }));
  }

  handleEditMealClick = (id, date, time, meal, calories) => {
    const { dispatch } = this.props;

    this.setState({ addMealDialogOpen: false });

    dispatch(editMeal({
      id,
      date: moment({
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate(),
        hours: time.getHours(),
        minutes: time.getMinutes(),
      }).utc().format(),
      meal,
      calories,
    }));
  }

  handleDeleteMealClick = () => {
    const { dispatch } = this.props;
    const { mealToDelete } = this.state;

    dispatch(deleteMeal(mealToDelete.id));
    this.setState({ deleteMealDialogOpen: false });
  }

  render() {
    const {
      dispatch,
      isLoading,
      dailyMealsList,
      mealsErrorSnackbarOpen,
      mealsErrorText,
      numberOfCaloriesPerDay,
    } = this.props;

    const {
      addMealDialogOpen,
      deleteMealDialogOpen,
      mealToDelete,
      mealToEdit,
    } = this.state;

    if (isLoading) {
      return (<Loading />);
    }

    return (
      <Main>
        {dailyMealsList.length === 0 ?
          <NoMeals />
        :
          dailyMealsList.map(dailyMeals => (
            <DailyMealsCard
              key={dailyMeals.date}
              dailyMeals={dailyMeals}
              onDeleteMealClick={meal => this.setState({
                mealToDelete: meal,
                deleteMealDialogOpen: true,
              })}
              onEditMealClick={meal => this.setState({
                mealToEdit: meal,
                addMealDialogOpen: true,
              })}
              numberOfCaloriesPerDay={numberOfCaloriesPerDay}
            />
          ))
        }

        <AddMealButton
          onClick={() => this.setState({
            addMealDialogOpen: true,
            mealToEdit: null,
          })}
        />

        <AddMealDialog
          isOpen={addMealDialogOpen}
          onCancelClick={() => this.setState({ addMealDialogOpen: false })}
          onAddMealClick={this.handleAddMealClick}
          onEditMealClick={this.handleEditMealClick}
          meal={mealToEdit}
        />

        <DeleteMealDialog
          isOpen={deleteMealDialogOpen}
          onCancelClick={() => this.setState({ deleteMealDialogOpen: false })}
          onDeleteClick={this.handleDeleteMealClick}
          meal={mealToDelete}
        />

        <Snackbar
          open={mealsErrorSnackbarOpen}
          message={mealsErrorText}
          autoHideDuration={4000}
          onRequestClose={() => dispatch(closeMealsErrorSnackbar())}
        />
      </Main>
    );
  }
}

const mapStateToProps = state => ({
  mealsErrorSnackbarOpen: state.meals.mealsErrorSnackbarOpen,
  mealsErrorText: state.meals.mealsErrorText,
  dailyMealsList: mealsGroupByDaySelector(state),
  isLoading: state.meals.isLoading,
  numberOfCaloriesPerDay: state.settings.settings ? state.settings.settings.numberOfCaloriesPerDay : null,
});

export default connect(
  mapStateToProps,
)(Meals);
