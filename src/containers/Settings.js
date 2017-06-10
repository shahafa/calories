import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSettings, setSettings } from '../actions/settingsActions';
import Main from '../components/Main';
import SettingsFrom from '../components/SettingsForm';
import Loading from '../components/Loading';

class Settings extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    settings: PropTypes.object,
    isLoading: PropTypes.bool.isRequired,
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
      </Main>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings.settings,
  isLoading: state.settings.isLoading,
});

export default connect(
  mapStateToProps,
)(Settings);
