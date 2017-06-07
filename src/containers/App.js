import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import DevTools from './DevTools';
import PrivateRoute from './PrivateRoute';
import AppShell from '../components/AppShell';
import Login from './Login';
import Signup from './Signup';
import Meals from './Meals';
import Users from './Users';
import Settings from './Settings';

const App = () => (
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
              <PrivateRoute path="/users" component={Users} />
              <PrivateRoute path="/settings" component={Settings} />
            </Switch>
          </AppShell>

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  </MuiThemeProvider>
);

export default App;
