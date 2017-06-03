import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { resetAuthStore, login, signup } from '../actions/authActions';
import { isValidEmail, isEmpty } from '../utils';
import HomeShell from '../components/HomeShell';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

class Home extends Component {
  static propTypes = {
    mode: PropTypes.oneOf(['login', 'signup']).isRequired,
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    isAuthenticating: PropTypes.bool.isRequired,
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
    this.setState({
      email: event.target.value,
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  validateEmail = (email) => {
    if (isEmpty(email)) {
      return 'Email address cannot be blank';
    } else if (!isValidEmail(email)) {
      return 'Email is not valid';
    }

    return '';
  };

  validatePassword = (password) => {
    if (isEmpty(password)) {
      return 'Password address cannot be blank';
    }

    return '';
  };

  handleEmailBlur = () => {
    const { email } = this.state;
    this.setState({ emailErrorText: this.validateEmail(email) });
  }

  handlePasswordBlur = () => {
    const { password } = this.state;
    this.setState({ passwordErrorText: this.validatePassword(password) });
  }

  handleLoginButtonClick = () => {
    const {
      email,
      password,
    } = this.state;

    const emailErrorText = this.validateEmail(email);
    const passwordErrorText = this.validatePassword(password);
    this.setState({ emailErrorText });
    this.setState({ passwordErrorText });

    if (emailErrorText === '' && passwordErrorText === '') {
      const { dispatch } = this.props;
      dispatch(login(email, password));
    }
  }

  handleSignupButtonClick = () => {
    const {
      email,
      password,
    } = this.state;

    const emailErrorText = this.validateEmail(email);
    const passwordErrorText = this.validatePassword(password);
    this.setState({ emailErrorText });
    this.setState({ passwordErrorText });

    if (emailErrorText === '' && passwordErrorText === '') {
      const { dispatch } = this.props;
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
      mode,
      history,
      isAuthenticating,
      isAuthenticated,
      isSigningUp,
      errorText,
    } = this.props;

    if (isAuthenticated) {
      return <Redirect to={{ pathname: '/calories' }} />;
    }

    return (
      <HomeShell>
        {mode === 'login' &&
          <LoginForm
            isAuthenticating={isAuthenticating}
            errorText={errorText}
            email={email}
            emailErrorText={emailErrorText}
            onEmailChange={this.handleEmailChange}
            onEmailBlur={this.handleEmailBlur}
            password={password}
            passwordErrorText={passwordErrorText}
            onPasswordChange={this.handlePasswordChange}
            onPasswordBlur={this.handlePasswordBlur}
            onLoginButtonClick={this.handleLoginButtonClick}
            onGetStartedClick={() => history.push('/signup')}
          />
        }

        {mode === 'signup' &&
          <SignupForm
            isSigningUp={isSigningUp}
            errorText={errorText}
            email={email}
            emailErrorText={emailErrorText}
            onEmailChange={this.handleEmailChange}
            onEmailBlur={this.handleEmailBlur}
            password={password}
            passwordErrorText={passwordErrorText}
            onPasswordChange={this.handlePasswordChange}
            onPasswordBlur={this.handlePasswordBlur}
            onSignupButtonClick={this.handleSignupButtonClick}
            onLoginClick={() => history.push('/login')}
          />
        }
      </HomeShell>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticating: state.auth.isAuthenticating,
  isAuthenticated: state.auth.isAuthenticated,
  isSigningUp: state.auth.isSigningUp,
  errorText: state.auth.errorText,
});

export default connect(mapStateToProps)(Home);
