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

  signupButton: {
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

class SignupForm extends Component {
  static propTypes = {
    isSigningUp: PropTypes.bool.isRequired,
    errorText: PropTypes.string.isRequired,
    onSignupButtonClick: PropTypes.func.isRequired,
    onLoginClick: PropTypes.func.isRequired,
  }

  state = {
    email: '',
    emailErrorText: '',
    password: '',
    passwordErrorText: '',
    confirmPassword: '',
    confirmPasswordErrorText: '',
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleConfirmPasswordChange = (event) => {
    this.setState({ confirmPassword: event.target.value });
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
    } else if (!validator.isLength(password, { min: 8 })) {
      this.setState({ passwordErrorText: 'Password must be at least 8 characters long' });
      return false;
    }

    this.setState({ passwordErrorText: '' });
    return true;
  }

  validateConfirmPassword = () => {
    const { password, confirmPassword } = this.state;
    if (validator.isEmpty(password)) {
      this.setState({ passwordErrorText: 'Password confirmation cannot be blank' });
      return false;
    } else if (password !== confirmPassword) {
      this.setState({ confirmPasswordErrorText: 'Password confirmation doesn\'t match' });
      return false;
    }
    this.setState({ confirmPasswordErrorText: '' });
    return true;
  }

  handleSignupButtonClick = () => {
    const { onSignupButtonClick } = this.props;

    const {
      email,
      password,
    } = this.state;

    if (this.validateEmail() && this.validatePassword() && this.validateConfirmPassword()) {
      onSignupButtonClick(email, password);
      this.setState({ email: '', password: '', confirmPassword: '' });
    }
  }

  render() {
    const {
      email,
      emailErrorText,
      password,
      passwordErrorText,
      confirmPassword,
      confirmPasswordErrorText,
    } = this.state;

    const {
      onLoginClick,
      isSigningUp,
      errorText,
    } = this.props;

    return (
      <div style={styles.container}>
        <div style={styles.logo}>Sign Up</div>

        <TextField
          value={email}
          fullWidth
          onChange={this.handleEmailChange}
          floatingLabelText="Email address"
          errorText={emailErrorText}
          onBlur={this.validateEmail}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              this.handleSignupButtonClick();
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
              this.handleSignupButtonClick();
            }
          }}
        />

        <TextField
          type="password"
          value={confirmPassword}
          fullWidth
          onChange={this.handleConfirmPasswordChange}
          floatingLabelText="Confirm Password"
          errorText={confirmPasswordErrorText}
          onBlur={this.validateConfirmPassword}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              this.handleSignupButtonClick();
            }
          }}
        />

        <div style={styles.error}>{errorText}</div>

        <RaisedButton
          style={styles.signupButton}
          primary
          onClick={this.handleSignupButtonClick}
          disabled={isSigningUp}
        >
          {isSigningUp ?
            <CircularProgress color="white" size={25} />
          :
            <div style={styles.signupButton.text}>Sign Up</div>
          }
        </RaisedButton>


        <div style={styles.getStarted}>
          {'Already have an account? '}
          <span
            style={styles.link}
            onClick={onLoginClick}
            role="button"
            tabIndex={0}
          >
            Login Here
          </span>
        </div>
      </div>
    );
  }
}

export default SignupForm;
