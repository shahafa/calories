import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const style = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const Loading = () => (
  <div style={style}>
    <CircularProgress size={80} thickness={5} />
  </div>
);

export default Loading;
