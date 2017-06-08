import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from 'material-ui/List';
import MealsIcon from 'material-ui/svg-icons/maps/local-dining';
import UserIcon from 'material-ui/svg-icons/action/supervisor-account';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import LogOutIcon from 'material-ui/svg-icons/action/exit-to-app';
import { grey600 } from 'material-ui/styles/colors';

const styles = {
  list: {
    position: 'absolute',
    width: '230px',
    marginTop: '5px',
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
      leftIcon={<MealsIcon color={mealsActive ? '#3367d6' : grey600} />}
      onClick={onMealsClick}
    />

    <ListItem
      style={Object.assign({}, styles.listItem, usersActive ? styles.active : {})}
      primaryText="Users Management"
      leftIcon={<UserIcon color={usersActive ? '#3367d6' : grey600} />}
      onClick={onUsersClick}
    />

    <ListItem
      style={Object.assign({}, styles.listItem, settingsActive ? styles.active : {})}
      primaryText="Settings"
      leftIcon={<SettingsIcon color={settingsActive ? '#3367d6' : grey600} />}
      onClick={onSettingsClick}
    />

    <ListItem
      style={styles.listItem}
      primaryText="Sign out"
      leftIcon={<LogOutIcon color={grey600} />}
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
