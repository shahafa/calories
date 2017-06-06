import React from 'react';
import { grey600 } from 'material-ui/styles/colors';

const style = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: grey600,
  fontSize: '20px',
  fontWeight: '300',
};

const NoMeals = () => (
  <div style={style}>
    <div>Hey, your meals report is empty :(</div>
    <div style={{ marginTop: '20px' }}>Use the add button to add a new meal</div>
  </div>
);

export default NoMeals;
