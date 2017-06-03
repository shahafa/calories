import React from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from '../assets/home-background.jpg';

const styles = {
  background: {
    display: 'fixed',
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${BackgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    filter: 'opacity(75%) blur(2px)',
  },

  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
  },

  card: {
    height: '365px',
    width: '250px',
    padding: '35px',
    background: 'white',
    borderRadius: '5px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.4), 0 6px 6px rgba(0, 0, 0, 0.4)',
    filter: 'opacity(90%)',
  },
};

const HomeShell = ({
  children,
}) => (
  <div>
    <div style={styles.background} />

    <div style={styles.container}>
      <div style={styles.card}>
        {children}
      </div>
    </div>
  </div>
);

HomeShell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
};

export default HomeShell;
