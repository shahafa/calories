import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';
import { Card } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { grey900, grey600 } from 'material-ui/styles/colors';

const styles = {
  root: {
    margin: '50px auto 0 auto',
    maxWidth: '720px',
  },

  card: {
    padding: '30px',
  },

  title: {
    color: grey900,
    fontSize: '14px',
    fontWeight: '500',
    marginBottom: '25px',
  },

  description: {
    color: grey600,
    fontSize: '14px',
    fontWeight: 'normal',
    width: '550px',
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
  },

  textField: {
    width: '260px',
  },

  button: {
    width: '84px',
    marginTop: '20px',
    marginLeft: '-18px',
  },
};

class SettingsForm extends Component {
  static propTypes = {
    settings: PropTypes.object,
    onUpdateClick: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      calories: props.settings ? props.settings.numberOfCaloriesPerDay : '',
      caloriesErrorText: '',
    };
  }

  handleCaloriesChange = (event) => {
    this.setState({ calories: event.target.value });
  };

  validateCalories = () => {
    const { calories } = this.state;
    if (!validator.isNumeric(calories)) {
      this.setState({ caloriesErrorText: 'Please enter a valid Calories number' });
      return false;
    }

    this.setState({ caloriesErrorText: '' });
    return true;
  }

  handleUpdateClick = () => {
    const { onUpdateClick } = this.props;

    const {
      calories,
    } = this.state;

    if (this.validateCalories()) {
      onUpdateClick({ numberOfCaloriesPerDay: calories });
    }
  }

  render() {
    const {
      calories,
      caloriesErrorText,
    } = this.state;

    return (
      <div style={styles.root}>
        <Card style={styles.card}>
          <div style={styles.title}>Settings</div>

          <div style={styles.description}>
            Set objective number of calories per day to track your daily calories consumption.
          </div>

          <div style={styles.container}>
            <TextField
              style={styles.textField}
              floatingLabelText="Expected number of calories per day"
              value={calories}
              errorText={caloriesErrorText}
              onChange={this.handleCaloriesChange}
              onBlur={this.validateCalories}
            />

            <FlatButton
              onClick={this.handleUpdateClick}
              style={styles.button}
              label="Update"
              primary
            />
          </div>
        </Card>
      </div>
    );
  }
}

export default SettingsForm;
