import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsers, updateUsersRole, deleteUser } from '../actions/usersActions';
import Main from '../components/Main';
import UsersFrom from '../components/UsersForm';
import DeleteUserDialog from '../components/DeleteUserDialog';
import Loading from '../components/Loading';

class Users extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired,
    users: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
  }

  state = {
    deleteUserDialogOpen: false,
    userToDelete: null,
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getUsers());
  }

  handleUpdateButtonClick = (users) => {
    const { dispatch } = this.props;
    dispatch(updateUsersRole(users));
  }

  handleDeleteUserClick = () => {
    const { dispatch } = this.props;
    const { userToDelete } = this.state;

    dispatch(deleteUser(userToDelete.id));
    this.setState({ deleteUserDialogOpen: false });
  }

  render() {
    const {
      userId,
      users,
      isLoading,
    } = this.props;

    const {
      deleteUserDialogOpen,
      userToDelete,
    } = this.state;

    if (isLoading) {
      return (<Loading />);
    }

    return (
      <Main>
        <UsersFrom
          userId={userId}
          users={users}
          onDeleteUserClick={user => this.setState({
            userToDelete: user,
            deleteUserDialogOpen: true,
          })}
          onUpdateButtonClick={this.handleUpdateButtonClick}
        />

        <DeleteUserDialog
          isOpen={deleteUserDialogOpen}
          onCancelClick={() => this.setState({ deleteUserDialogOpen: false })}
          onDeleteClick={this.handleDeleteUserClick}
          user={userToDelete}
        />
      </Main>
    );
  }
}

const mapStateToProps = state => ({
  userId: state.auth.user.id,
  users: state.users.users,
  isLoading: state.settings.isLoading,
});

export default connect(
  mapStateToProps,
)(Users);
