import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import FilterIcon from 'material-ui/svg-icons/content/filter-list';
import ClearIcon from 'material-ui/svg-icons/content/clear';
import { grey600 } from 'material-ui/styles/colors';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '25px auto 35px auto',
    maxWidth: '720px',
    width: '720px',
  },

  container: {
    display: 'flex',
  },

  title: {
    marginLeft: '6px',
    lineHeight: '26px',
    fontSize: '13px',
    fontWeight: '300',
    color: grey600,
  },

  picker: {
    width: '65px',
    marginTop: '-11px',
    marginLeft: '6px',
    textAlign: 'center',

    textareaStyle: {
      textAlign: 'center',
      width: '65px',
    },

    dateTextFieldStyle: {
      textAlign: 'center',
      fontSize: '13px',
      fontWeight: '300',
      width: '65px',
    },

    timeTextFieldStyle: {
      textAlign: 'center',
      fontSize: '13px',
      fontWeight: '300',
      width: '65px',
    },

    hintStyle: {
      width: '65px',
      textAlign: 'center',
      color: grey600,
      fontSize: '13px',
      fontWeight: '300',
    },
  },

  clear: {
    cursor: 'pointer',
    marginLeft: '15px',
  },
};

class Filter extends Component {
  state = {
    fromDate: null,
    fromTime: null,
    toDate: null,
    toTime: null,
  }

  handleFromDateChange = (event, date) => {
    this.setState({ fromDate: date });
  };

  handleFromTimeChange = (event, time) => {
    this.setState({ fromTime: time });
  };

  handleToDateChange = (event, date) => {
    this.setState({ toDate: date });
  };

  handleToTimeChange = (event, time) => {
    this.setState({ toTime: time });
  };

  render() {
    const {
      fromDate,
      fromTime,
      toDate,
      toTime,
    } = this.state;

    return (
      <div style={styles.root}>
        <div style={styles.container}>
          <FilterIcon color={grey600} />

          <div style={styles.title}>Filter meals From</div>

          <DatePicker
            style={styles.picker}
            textFieldStyle={styles.picker.dateTextFieldStyle}
            hintStyle={styles.picker.hintStyle}
            textareaStyle={styles.picker.textareaStyle}
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
            value={fromTime}
            onChange={this.handleFromTimeChange}
            hintText="Any Time"
          />

          <div style={styles.title}>To</div>

          <DatePicker
            style={styles.picker}
            textFieldStyle={styles.picker.dateTextFieldStyle}
            hintStyle={styles.picker.hintStyle}
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
            value={toTime}
            onChange={this.handleToTimeChange}
            hintText="Any Time"
          />
        </div>

        <div>
          <ClearIcon color={grey600} style={styles.clear} />
        </div>
      </div>
    );
  }
}

export default Filter;
