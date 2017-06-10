import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { getMeals, addMeal, deleteMeal, editMeal, setFilter } from '../actions/mealsActions';
import { getSettings } from '../actions/settingsActions';
import { mealsGroupByDaySelector } from '../selectors';
import Main from '../components/Main';
import Filter from '../components/Filter';
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
    filter: PropTypes.object.isRequired,
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

  handleApplyFilterClick = (filter) => {
    const { dispatch } = this.props;
    dispatch(setFilter(filter));
  }

  render() {
    const {
      isLoading,
      dailyMealsList,
      filter,
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
        <Filter
          filter={filter}
          onFilterUpdate={this.handleApplyFilterClick}
        />

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
      </Main>
    );
  }
}

const mapStateToProps = state => ({
  dailyMealsList: mealsGroupByDaySelector(state),
  isLoading: state.meals.isLoading,
  filter: state.meals.filter,
  numberOfCaloriesPerDay: state.settings.settings
    ? state.settings.settings.numberOfCaloriesPerDay
    : null,
});

export default connect(
  mapStateToProps,
)(Meals);
