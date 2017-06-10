import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsers, updateUsersRole } from '../actions/usersActions';
import Main from '../components/Main';
import UsersFrom from '../components/UsersForm';
import Loading from '../components/Loading';

class Users extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired,
    users: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getUsers());
  }

  onUpdateButtonClick = (users) => {
    const { dispatch } = this.props;
    dispatch(updateUsersRole(users));
  }

  render() {
    const {
      userId,
      users,
      isLoading,
    } = this.props;

    if (isLoading) {
      return (<Loading />);
    }

    return (
      <Main>
        <UsersFrom
          userId={userId}
          users={users}
          onUpdateButtonClick={this.onUpdateButtonClick}
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
