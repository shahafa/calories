import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const DeleteMealDialog = ({
  isOpen,
  onCancelClick,
  onDeleteClick,
  meal,
}) => (
  <Dialog
    contentStyle={{ width: '400px' }}
    actions={[
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={onCancelClick}
      />,
      <FlatButton
        label="Delete"
        primary
        onTouchTap={onDeleteClick}
      />,
    ]}
    open={isOpen}
  >
    {`Delete '${meal ? meal.meal : ''}' meal?`}
  </Dialog>);

DeleteMealDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCancelClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  meal: PropTypes.object,
};

export default DeleteMealDialog;
