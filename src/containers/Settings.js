import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import { getSettings, setSettings, closeSettingsErrorSnackbar } from '../actions/settingsActions';
import Main from '../components/Main';
import SettingsFrom from '../components/SettingsForm';
import Loading from '../components/Loading';

class Settings extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    settings: PropTypes.object,
    isLoading: PropTypes.bool.isRequired,
    settingsErrorSnackbarOpen: PropTypes.bool.isRequired,
    settingsErrorText: PropTypes.string.isRequired,
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getSettings());
  }

  handleUpdateClick = (settings) => {
    const { dispatch } = this.props;
    dispatch(setSettings(settings));
  }

  render() {
    const {
      dispatch,
      settingsErrorSnackbarOpen,
      settingsErrorText,
      settings,
      isLoading,
    } = this.props;

    if (isLoading) {
      return (<Loading />);
    }

    return (
      <Main>
        <SettingsFrom
          settings={settings}
          onUpdateClick={this.handleUpdateClick}
        />

        <Snackbar
          open={settingsErrorSnackbarOpen}
          message={settingsErrorText}
          autoHideDuration={4000}
          onRequestClose={() => dispatch(closeSettingsErrorSnackbar())}
        />
      </Main>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings.settings,
  isLoading: state.settings.isLoading,
  settingsErrorSnackbarOpen: state.meals.mealsErrorSnackbarOpen,
  settingsErrorText: state.meals.mealsErrorText,
});

export default connect(
  mapStateToProps,
)(Settings);
