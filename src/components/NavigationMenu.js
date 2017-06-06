import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from 'material-ui/List';
import { grey600 } from 'material-ui/styles/colors';

const styles = {
  list: {
    width: '230px',
  },

  listItem: {
    color: grey600,
    fontSize: '14px',
    paddingLeft: '18px',
    fontWeight: '400',
    letterSpacing: '.01em',
  },

  active: {
    color: '#3367d6',
  },
};

const NavigationMenu = ({
  mealsActive,
  usersActive,
  settingsActive,
  onMealsClick,
  onUsersClick,
  onSettingsClick,
  onSignOutClick,
}) => (
  <List style={styles.list}>
    <ListItem
      style={Object.assign({}, styles.listItem, mealsActive ? styles.active : {})}
      primaryText="Meals"
      onClick={onMealsClick}
    />

    <ListItem
      style={Object.assign({}, styles.listItem, usersActive ? styles.active : {})}
      primaryText="Users Management"
      onClick={onUsersClick}
    />

    <ListItem
      style={Object.assign({}, styles.listItem, settingsActive ? styles.active : {})}
      primaryText="Settings"
      onClick={onSettingsClick}
    />

    <ListItem
      style={styles.listItem}
      primaryText="Sign out"
      onClick={onSignOutClick}
    />
  </List>
);

NavigationMenu.propTypes = {
  mealsActive: PropTypes.bool.isRequired,
  usersActive: PropTypes.bool.isRequired,
  settingsActive: PropTypes.bool.isRequired,
  onMealsClick: PropTypes.func.isRequired,
  onUsersClick: PropTypes.func.isRequired,
  onSettingsClick: PropTypes.func.isRequired,
  onSignOutClick: PropTypes.func.isRequired,
};

export default NavigationMenu;
