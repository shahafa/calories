import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import { red500, cyan500, grey600 } from 'material-ui/styles/colors';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  logo: {
    marginTop: '10px',
    marginBottom: '10px',
    textAlign: 'center',
    fontSize: '28px',
    fontWeight: '300',
    color: grey600,
  },

  error: {
    textAlign: 'center',
    marginTop: '20px',
    height: '14px',
    color: red500,
    fontSize: '14px',
    fontWeight: '300',
  },

  loginButton: {
    marginTop: '30px',
    marginBottom: '20px',

    text: {
      fontSize: '16px',
      fontWeight: '300',
      color: 'white',
    },
  },

  getStarted: {
    marginTop: '15px',
    fontSize: '12px',
    fontWeight: '300',
    color: grey600,
  },

  link: {
    cursor: 'pointer',
    color: cyan500,
  },
};

class LoginForm extends Component {
  static propTypes = {
    isAuthenticating: PropTypes.bool.isRequired,
    errorText: PropTypes.string.isRequired,
    onLoginButtonClick: PropTypes.func.isRequired,
    onGetStartedClick: PropTypes.func.isRequired,
  }

  state = {
    email: '',
    emailErrorText: '',
    password: '',
    passwordErrorText: '',
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
    const { onLoginButtonClick } = this.props;
    const {
      email,
      password,
    } = this.state;

    if (this.validateEmail() && this.validatePassword()) {
      onLoginButtonClick(email, password);
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
      onGetStartedClick,
      isAuthenticating,
      errorText,
    } = this.props;

    return (
      <div style={styles.container}>
        <div style={styles.logo}>Welcome!</div>

        <TextField
          value={email}
          fullWidth
          onChange={this.handleEmailChange}
          floatingLabelText="Email address"
          errorText={emailErrorText}
          onBlur={this.validateEmail}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              this.handleLoginButtonClick();
            }
          }}
        />

        <TextField
          type="password"
          value={password}
          fullWidth
          onChange={this.handlePasswordChange}
          floatingLabelText="Password"
          errorText={passwordErrorText}
          onBlur={this.validatePassword}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              this.handleLoginButtonClick();
            }
          }}
        />

        <div style={styles.error}>{errorText}</div>

        <RaisedButton
          style={styles.loginButton}
          primary
          onClick={this.handleLoginButtonClick}
          disabled={isAuthenticating}
        >
          {isAuthenticating ?
            <CircularProgress color="white" size={25} />
          :
            <div style={styles.loginButton.text}>Login</div>
          }
        </RaisedButton>

        <div style={styles.getStarted}>
          {"Don't have an account? "}
          <span
            style={styles.link}
            onClick={onGetStartedClick}
            role="button"
            tabIndex={0}
          >
            Get Started
          </span>
        </div>
      </div>
    );
  }
}

export default LoginForm;
