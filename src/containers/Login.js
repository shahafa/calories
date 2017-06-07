import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { resetAuthStore, login } from '../actions/authActions';
import HomeShell from '../components/HomeShell';
import LoginForm from '../components/LoginForm';

class Login extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    isAuthenticating: PropTypes.bool.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    errorText: PropTypes.string.isRequired,
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(resetAuthStore());
  }

  handleLoginButtonClick = (email, password) => {
    const { dispatch } = this.props;
    dispatch(login(email, password));
  }

  render() {
    const {
      history,
      isAuthenticating,
      isAuthenticated,
      errorText,
    } = this.props;

    if (isAuthenticated) {
      return <Redirect to={{ pathname: '/meals' }} />;
    }

    return (
      <HomeShell>
        <LoginForm
          isAuthenticating={isAuthenticating}
          errorText={errorText}
          onLoginButtonClick={this.handleLoginButtonClick}
          onGetStartedClick={() => history.push('/signup')}
        />
      </HomeShell>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticating: state.auth.isAuthenticating,
  isAuthenticated: state.auth.isAuthenticated,
  errorText: state.auth.errorText,
});

export default connect(mapStateToProps)(Login);
