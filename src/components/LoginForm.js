import React from 'react';
import PropTypes from 'prop-types';
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

const Login = ({
  isAuthenticating,
  errorText,
  email,
  emailErrorText,
  onEmailChange,
  onEmailBlur,
  password,
  passwordErrorText,
  onPasswordChange,
  onPasswordBlur,
  onLoginButtonClick,
  onGetStartedClick,
}) => (
  <div style={styles.container}>
    <div style={styles.logo}>Welcome!</div>

    <TextField
      value={email}
      fullWidth
      onChange={onEmailChange}
      floatingLabelText="Email address"
      errorText={emailErrorText}
      onBlur={onEmailBlur}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          onLoginButtonClick();
        }
      }}
    />

    <TextField
      type="password"
      value={password}
      fullWidth
      onChange={onPasswordChange}
      floatingLabelText="Password"
      errorText={passwordErrorText}
      onBlur={onPasswordBlur}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          onLoginButtonClick();
        }
      }}
    />

    <div style={styles.error}>{errorText}</div>

    <RaisedButton
      style={styles.loginButton}
      primary
      onClick={onLoginButtonClick}
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

Login.propTypes = {
  isAuthenticating: PropTypes.bool.isRequired,
  errorText: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  emailErrorText: PropTypes.string.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onEmailBlur: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  passwordErrorText: PropTypes.string.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onPasswordBlur: PropTypes.func.isRequired,
  onLoginButtonClick: PropTypes.func.isRequired,
  onGetStartedClick: PropTypes.func.isRequired,
};

export default Login;
