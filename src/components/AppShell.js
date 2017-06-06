import React from 'react';
import PropTypes from 'prop-types';
import { cyanA700 } from 'material-ui/styles/colors';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
  },

  appBar: {
    width: '100%',
    height: '64px',
    backgroundColor: cyanA700,
    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px',
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
    <div style={styles.appBar} />

    <div style={styles.container}>
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
