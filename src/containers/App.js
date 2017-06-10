import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Snackbar from 'material-ui/Snackbar';
import { closeSnackbar } from '../actions/snackbarActions';
import DevTools from './DevTools';
import PrivateRoute from './PrivateRoute';
import AppShell from '../components/AppShell';
import Login from './Login';
import Signup from './Signup';
import Meals from './Meals';
import Users from './Users';
import Settings from './Settings';

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
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />

          <AppShell history={Router.history}>
            <Switch>
              <PrivateRoute path="/meals" component={Meals} />
              <PrivateRoute path="/settings" component={Settings} />

              {(userRole === 'admin' || userRole === 'userManager') &&
                <PrivateRoute path="/users" component={Users} />
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
