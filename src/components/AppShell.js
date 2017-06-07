import React from 'react';
import PropTypes from 'prop-types';
import { cyanA700 } from 'material-ui/styles/colors';
import Navigation from '../containers/Navigation';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
  },

  appBar: {
    textAlign: 'center',
    boxSizing: 'border-box',
    width: '100%',
    height: '64px',
    backgroundColor: cyanA700,
    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px',
    color: 'white',
    fontSize: '26px',
    fontWeight: '100',
    lineHeight: '64px',
    paddingLeft: '32px',
  },

  container: {
    display: 'flex',
    flex: 1,
    overflowY: 'auto',
  },

  addMealButton: {
    display: 'flex',
    flexDirection: 'row-reverse',
    marginTop: '-28px',
    zIndex: '9999',
    position: 'relative',
  },
};

const AppShell = ({
  children,
}) => (
  <div style={styles.root}>
    <div style={styles.appBar}>
      Calories Tracker
    </div>

    <div style={styles.container}>
      <Navigation />

      {children}
    </div>
  </div>
);

AppShell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
};

export default AppShell;
