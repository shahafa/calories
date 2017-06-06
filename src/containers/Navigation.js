import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NavigationMenu from '../components/NavigationMenu';

const Navigation = ({
  history,
  location,
}) => (
  <NavigationMenu
    mealsActive={location.pathname === '/meals'}
    usersActive={location.pathname === '/users'}
    settingsActive={location.pathname === '/settings'}
    onMealsClick={() => {
      if (location.pathname !== '/meals') {
        history.push('/meals');
      }
    }}
    onUsersClick={() => {
      if (location.pathname !== '/users') {
        history.push('/users');
      }
    }}
    onSettingsClick={() => {
      if (location.pathname !== '/settings') {
        history.push('/settings');
      }
    }}
    onSignOutClick={() => history.push('/')}
  />
);

Navigation.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
};

export default withRouter(connect()(Navigation));
