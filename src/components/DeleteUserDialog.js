import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const DeleteUserDialog = ({
  isOpen,
  onCancelClick,
  onDeleteClick,
  user,
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
    {`Delete user '${user ? user.email : ''}'?`}
  </Dialog>);

DeleteUserDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCancelClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  user: PropTypes.object,
};

export default DeleteUserDialog;
