import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import moment from 'moment';
import { getMeals, addMeal, deleteMeal } from '../actions/mealsActions';
import { mealsGroupByDaySelector } from '../selectors';
import AppShell from '../components/AppShell';
import DailyMealsCard from '../components/DailyMealsCard';
import AddMealButton from '../components/AddMealButton';
import AddMealDialog from '../components/AddMealDialog';

class Meals extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    dailyMealsList: PropTypes.array.isRequired,
  }

  state = {
    addMealDialogOpen: false,
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getMeals());
  }

  handleAddMealClick = (date, time, meal, calories) => {
    const { dispatch } = this.props;

    this.setState({ addMealDialogOpen: false });

    dispatch(addMeal({
      id: uuid(),
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

  render() {
    const { dailyMealsList, dispatch } = this.props;
    const { addMealDialogOpen } = this.state;

    return (
      <AppShell>
        {dailyMealsList.map(dailyMeals => (
          <DailyMealsCard
            key={dailyMeals.date}
            dailyMeals={dailyMeals}
            onDeleteMealClick={(mealId) => { dispatch(deleteMeal(mealId)); }}
          />
        ))}

        <AddMealButton onClick={() => this.setState({ addMealDialogOpen: true })} />
        <AddMealDialog
          isOpen={addMealDialogOpen}
          onCancelClick={() => this.setState({ addMealDialogOpen: false })}
          onAddMealClick={this.handleAddMealClick}
        />
      </AppShell>
    );
  }
}

const mapStateToProps = state => ({
  dailyMealsList: mealsGroupByDaySelector(state),
});

export default connect(
  mapStateToProps,
)(Meals);
