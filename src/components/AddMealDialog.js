import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import validator from 'validator';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';
import DatePicker from 'material-ui/DatePicker';

class AddMealDialog extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onAddMealClick: PropTypes.func.isRequired,
    onEditMealClick: PropTypes.func.isRequired,
    onCancelClick: PropTypes.func.isRequired,
    meal: PropTypes.object,
  }

  state = {
    id: uuid(),
    editMode: false,
    date: new Date(),
    time: new Date(),
    meal: '',
    mealErrorText: '',
    calories: '',
    caloriesErrorText: '',
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.meal) {
      this.state = {
        editMode: true,
        id: nextProps.meal.id,
        date: new Date(nextProps.meal.date),
        time: new Date(nextProps.meal.date),
        meal: nextProps.meal.meal,
        calories: nextProps.meal.calories,
        mealErrorText: '',
        caloriesErrorText: '',
      };
    } else {
      this.setState({
        editMode: false,
        id: uuid(),
        date: new Date(),
        time: new Date(),
        meal: '',
        mealErrorText: '',
        calories: '',
        caloriesErrorText: '',
      });
    }
  }

  handleDateChange = (event, date) => {
    this.setState({ date });
  };

  handleTimeChange = (event, time) => {
    this.setState({ time });
  };

  handleMealChange = (event) => {
    this.setState({ meal: event.target.value });
  };

  handleCaloriesChange = (event) => {
    this.setState({ calories: event.target.value });
  };

  validateMeal = () => {
    const { meal } = this.state;
    if (validator.isEmpty(meal)) {
      this.setState({ mealErrorText: 'Meal cannot be blank' });
      return false;
    }

    this.setState({ mealErrorText: '' });
    return true;
  }

  validateCalories = () => {
    const { calories } = this.state;
    if (!validator.isNumeric(calories.toString())) {
      this.setState({ caloriesErrorText: 'Please enter a valid Calories number' });
      return false;
    }

    this.setState({ caloriesErrorText: '' });
    return true;
  }

  handleAddMealClick = () => {
    const { onAddMealClick } = this.props;
    const {
      id,
      date,
      time,
      meal,
      calories,
    } = this.state;

    if (this.validateMeal() && this.validateCalories()) {
      onAddMealClick(id, date, time, meal, calories);
    }
  }

  handleEditMealClick = () => {
    const { onEditMealClick } = this.props;
    const {
      id,
      date,
      time,
      meal,
      calories,
    } = this.state;

    if (this.validateMeal() && this.validateCalories()) {
      onEditMealClick(id, date, time, meal, calories);
    }
  }

  handleCancelClick = () => {
    const { onCancelClick } = this.props;
    onCancelClick();
  }

  render() {
    const { isOpen } = this.props;

    const {
      editMode,
      date,
      time,
      meal,
      mealErrorText,
      calories,
      caloriesErrorText,
    } = this.state;

    return (
      <Dialog
        title={editMode ? 'Edit Meal' : 'Add Meal'}
        contentStyle={{ width: '450px' }}
        actions={[
          <FlatButton
            label="Cancel"
            primary
            onTouchTap={this.handleCancelClick}
          />,
          <FlatButton
            label={editMode ? 'Update' : 'Add'}
            primary
            onTouchTap={editMode ? this.handleEditMealClick : this.handleAddMealClick}
          />,
        ]}
        modal
        open={isOpen}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <DatePicker
            style={{ marginBottom: '25px' }}
            hintText="Date"
            container="inline"
            fullWidth
            value={date}
            onChange={this.handleDateChange}
          />

          <TimePicker
            format="ampm"
            hintText="Time"
            fullWidth
            value={time}
            onChange={this.handleTimeChange}
          />

          <TextField
            floatingLabelText="Meal"
            fullWidth
            value={meal}
            errorText={mealErrorText}
            onChange={this.handleMealChange}
            onBlur={this.validateMeal}
          />

          <TextField
            floatingLabelText="Calories"
            fullWidth
            value={calories}
            errorText={caloriesErrorText}
            onChange={this.handleCaloriesChange}
            onBlur={this.validateCalories}
          />
        </div>
      </Dialog>
    );
  }
}

export default AddMealDialog;
