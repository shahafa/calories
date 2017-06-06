import React from 'react';
import PropTypes from 'prop-types';

const style = {
  display: 'flex',
  flex: '1',
};

const Main = ({
  children,
}) => (
  <div style={style}>
    {children}
  </div>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
};

export default Main;
