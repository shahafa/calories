import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import FlatButton from 'material-ui/FlatButton';
import { grey600 } from 'material-ui/styles/colors';

const styles = {
  container: {
    margin: '25px auto 30px auto',
    maxWidth: '640px',
    width: '640px',
  },

  root: {
    display: 'flex',
  },

  title: {
    marginRight: '6px',
    lineHeight: '26px',
    fontSize: '13px',
    color: grey600,
  },

  picker: {
    marginRight: '6px',
    width: '65px',
    marginTop: '-11px',
    textAlign: 'center',

    inputStyle: {
      textAlign: 'center',
      width: '65px',
    },

    textareaStyle: {
      textAlign: 'center',
      width: '65px',
    },

    dateTextFieldStyle: {
      textAlign: 'center',
      fontSize: '13px',
      width: '65px',
    },

    timeTextFieldStyle: {
      textAlign: 'center',
      fontSize: '13px',
      width: '65px',
    },

    hintStyle: {
      width: '65px',
      textAlign: 'center',
      color: grey600,
      fontSize: '13px',
    },
  },

  buttons: {
    display: 'flex',
    marginLeft: '-15px',

    labelStyle: {
      fontSize: '13px',
    },
  },
};

class Filter extends Component {
  static propTypes = {
    filter: PropTypes.object.isRequired,
    onFilterUpdate: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    const { filter } = this.props;
    this.state = {
      fromDate: filter.fromDate === null ? null : new Date(filter.fromDate),
      fromTime: filter.fromTime === null ? null : new Date(filter.fromTime),
      toDate: filter.toDate === null ? null : new Date(filter.toDate),
      toTime: filter.toTime === null ? null : new Date(filter.toTime),
    };
  }

  componentWillReceiveProps(nextProps) {
    const { filter } = nextProps;
    this.setState({
      fromDate: filter.fromDate === null ? null : new Date(filter.fromDate),
      fromTime: filter.fromTime === null ? null : new Date(filter.fromTime),
      toDate: filter.toDate === null ? null : new Date(filter.toDate),
      toTime: filter.toTime === null ? null : new Date(filter.toTime),
    });
  }

  handleFromDateChange = (event, date) => {
    const { onFilterUpdate } = this.props;
    onFilterUpdate({
      fromDate: date,
      fromTime: this.state.fromTime,
      toDate: this.state.toDate,
      toTime: this.state.toTime,
    });
  };

  handleFromTimeChange = (event, time) => {
    const { onFilterUpdate } = this.props;
    onFilterUpdate({
      fromDate: this.state.fromDate,
      fromTime: time,
      toDate: this.state.toDate,
      toTime: this.state.toTime,
    });
  };

  handleToDateChange = (event, date) => {
    const { onFilterUpdate } = this.props;
    onFilterUpdate({
      fromDate: this.state.fromDate,
      fromTime: this.state.fromTime,
      toDate: date,
      toTime: this.state.toTime,
    });
  };

  handleToTimeChange = (event, time) => {
    const { onFilterUpdate } = this.props;
    onFilterUpdate({
      fromDate: this.state.fromDate,
      fromTime: this.state.fromTime,
      toDate: this.state.toDate,
      toTime: time,
    });
  };

  render() {
    const { onFilterUpdate } = this.props;

    const {
      fromDate,
      fromTime,
      toDate,
      toTime,
    } = this.state;

    return (
      <div style={styles.container}>
        <div style={styles.root}>
          <div style={styles.title}>Show meals from</div>

          <DatePicker
            style={styles.picker}
            textFieldStyle={styles.picker.dateTextFieldStyle}
            hintStyle={styles.picker.hintStyle}
            textareaStyle={styles.picker.textareaStyle}
            inputStyle={styles.picker.inputStyle}
            value={fromDate}
            onChange={this.handleFromDateChange}
            hintText="Any Date"
            container="inline"
            hideCalendarDate
          />

          <TimePicker
            style={styles.picker}
            textFieldStyle={styles.picker.timeTextFieldStyle}
            hintStyle={styles.picker.hintStyle}
            textareaStyle={styles.picker.textareaStyle}
            inputStyle={styles.picker.inputStyle}
            value={fromTime}
            onChange={this.handleFromTimeChange}
            hintText="Any Time"
          />

          <div style={styles.title}>To</div>

          <DatePicker
            style={styles.picker}
            textFieldStyle={styles.picker.dateTextFieldStyle}
            hintStyle={styles.picker.hintStyle}
            inputStyle={styles.picker.inputStyle}
            value={toDate}
            onChange={this.handleToDateChange}
            hintText="Any Date"
            container="inline"
            hideCalendarDate
          />

          <TimePicker
            style={styles.picker}
            textFieldStyle={styles.picker.timeTextFieldStyle}
            hintStyle={styles.picker.hintStyle}
            inputStyle={styles.picker.inputStyle}
            value={toTime}
            onChange={this.handleToTimeChange}
            hintText="Any Time"
          />
        </div>

        <div style={styles.buttons}>
          <FlatButton
            labelStyle={styles.buttons.labelStyle}
            label="Clear Filter"
            disabled={!fromDate && !fromTime && !toDate && !toTime}
            onTouchTap={() => onFilterUpdate({
              fromDate: null,
              fromTime: null,
              toDate: null,
              toTime: null,
            })}
          />
        </div>
      </div>
    );
  }
}

export default Filter;
