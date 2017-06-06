import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import validator from 'validator';
import { resetAuthStore, signup } from '../actions/authActions';
import HomeShell from '../components/HomeShell';
import SignupForm from '../components/SignupForm';

class Signup extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    isSigningUp: PropTypes.bool.isRequired,
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

  handleSignupButtonClick = () => {
    const { dispatch } = this.props;
    const {
      email,
      password,
    } = this.state;

    if (this.validateEmail() && this.validatePassword()) {
      dispatch(signup(email, password));
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
      isSigningUp,
      isAuthenticated,
      errorText,
    } = this.props;

    if (isAuthenticated) {
      return <Redirect to={{ pathname: '/meals' }} />;
    }

    return (
      <HomeShell>
        <SignupForm
          isSigningUp={isSigningUp}
          errorText={errorText}
          email={email}
          emailErrorText={emailErrorText}
          onEmailChange={this.handleEmailChange}
          onEmailBlur={this.validateEmail}
          password={password}
          passwordErrorText={passwordErrorText}
          onPasswordChange={this.handlePasswordChange}
          onPasswordBlur={this.validatePassword}
          onSignupButtonClick={this.handleSignupButtonClick}
          onLoginClick={() => history.push('/login')}
        />
      </HomeShell>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isSigningUp: state.auth.isSigningUp,
  errorText: state.auth.errorText,
});

export default connect(mapStateToProps)(Signup);
