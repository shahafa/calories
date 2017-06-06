import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import validator from 'validator';
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

  state = {
    email: '',
    emailErrorText: '',
    password: '',
    passwordErrorText: '',
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(resetAuthStore());
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  validateEmail = () => {
    const { email } = this.state;
    if (validator.isEmpty(email)) {
      this.setState({ emailErrorText: 'Email address cannot be blank' });
      return false;
    } else if (!validator.isEmail(email)) {
      this.setState({ emailErrorText: 'Email address is not valid' });
      return false;
    }

    this.setState({ emailErrorText: '' });
    return true;
  };

  validatePassword = () => {
    const { password } = this.state;
    if (validator.isEmpty(password)) {
      this.setState({ passwordErrorText: 'Password cannot be blank' });
      return false;
    }

    this.setState({ passwordErrorText: '' });
    return true;
  }

  handleLoginButtonClick = () => {
    const { dispatch } = this.props;
    const {
      email,
      password,
    } = this.state;

    if (this.validateEmail() && this.validatePassword()) {
      dispatch(login(email, password));
    }
  }

  render() {
    const {
      email,
      emailErrorText,
      password,
      passwordErrorText,
    } = this.state;

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
          email={email}
          emailErrorText={emailErrorText}
          onEmailChange={this.handleEmailChange}
          onEmailBlur={this.validateEmail}
          password={password}
          passwordErrorText={passwordErrorText}
          onPasswordChange={this.handlePasswordChange}
          onPasswordBlur={this.validatePassword}
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
