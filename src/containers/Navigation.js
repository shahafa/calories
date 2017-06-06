import React from 'react';
import PropTypes from 'prop-types';
import NavigationMenu from '../components/NavigationMenu';

const Navigation = ({
  history,
}) => (
  <NavigationMenu
    mealsActive={history.location.pathname === '/meals'}
    usersActive={history.location.pathname === '/users'}
    settingsActive={history.location.pathname === '/settings'}
    onMealsClick={() => {
      if (history.location.pathname !== '/meals') {
        history.push('/meals');
      }
    }}
    onUsersClick={() => {
      if (history.location.pathname !== '/users') {
        history.push('/users');
      }
    }}
    onSettingsClick={() => {
      if (history.location.pathname !== '/settings') {
        history.push('/settings');
      }
    }}
    onSignOutClick={() => history.push('/')}
  />
);

Navigation.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Navigation;
