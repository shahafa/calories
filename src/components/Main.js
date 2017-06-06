import React from 'react';
import PropTypes from 'prop-types';

const style = {
  flex: '1',
  display: 'flex',
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
