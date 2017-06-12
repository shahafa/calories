import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Snackbar from 'material-ui/Snackbar';
import { closeSnackbar } from '../actions/snackbarActions';
import PrivateRoute from './PrivateRoute';
import DevTools from '../components/DevTools';
import AppShell from '../components/AppShell';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import MealsPage from './MealsPage';
import UsersPage from './UsersPage';
import SettingsPage from './SettingsPage';

const App = ({
  dispatch,
  userRole,
  snackbarIsOpen,
  snackbarMessage,
}) => (
  <MuiThemeProvider>
    <Router>
      <div>
        {process.env.NODE_ENV === 'development' && <DevTools />}

        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />

          <AppShell history={Router.history}>
            <Switch>
              <PrivateRoute path="/meals" component={MealsPage} />
              <PrivateRoute path="/settings" component={SettingsPage} />

              {(userRole === 'admin' || userRole === 'userManager') &&
                <PrivateRoute path="/users" component={UsersPage} />
              }

              <Redirect from="*" to="/meals" />
            </Switch>

            <Snackbar
              open={snackbarIsOpen}
              message={snackbarMessage}
              autoHideDuration={4000}
              onRequestClose={() => dispatch(closeSnackbar())}
            />
          </AppShell>
        </Switch>
      </div>
    </Router>
  </MuiThemeProvider>
);

const mapStateToProps = state => ({
  userRole: state.auth.user.role,
  snackbarIsOpen: state.snackBar.isOpen,
  snackbarMessage: state.snackBar.message,
});

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  userRole: PropTypes.string.isRequired,
  snackbarIsOpen: PropTypes.bool.isRequired,
  snackbarMessage: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(App);
