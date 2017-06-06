import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import store from '../store';
import DevTools from './DevTools';
import PrivateRoute from './PrivateRoute';
import AppShell from '../components/AppShell';
import Login from './Login';
import Signup from './Signup';
import Meals from './Meals';
import Users from './Users';
import Settings from './Settings';

const App = () => (
  <Provider store={store}>
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
  </Provider>
);

export default App;
