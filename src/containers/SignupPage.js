import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { resetAuthStore, signup } from '../actions/authActions';
import HomeShell from '../components/HomeShell';
import SignupForm from '../components/SignupForm';

class SignupPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    isSigningUp: PropTypes.bool.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    errorText: PropTypes.string.isRequired,
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(resetAuthStore());
  }

  handleSignupButtonClick = (email, password) => {
    const { dispatch } = this.props;
    dispatch(signup(email, password));
  }

  render() {
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

export default connect(mapStateToProps)(SignupPage);
