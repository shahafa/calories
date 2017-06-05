import React from 'react';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  position: 'absolute',
  bottom: '32px',
  right: '64px',
};

const AddMealButton = ({
  onClick,
}) => (
  <FloatingActionButton
    secondary
    style={style}
    onClick={onClick}
  >
    <ContentAdd />
  </FloatingActionButton>
);

AddMealButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMealButton;
