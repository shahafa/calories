import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const styles = {
  loading: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const Loading = () => (
  <div style={styles.loading}>
    <CircularProgress size={80} thickness={5} />
  </div>
);

export default Loading;
