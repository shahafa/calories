import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import store from '../store';
import DevTools from './DevTools';
import PrivateRoute from './PrivateRoute';
import NoMatch from '../components/NoMatch';
import Login from './Login';
import Signup from './Signup';
import Meals from './Meals';

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <Router basename="/">
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute path="/meals" component={Meals} />
            <Route component={NoMatch} />
          </Switch>

          {process.env.NODE_ENV === 'development' && <DevTools />}
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>
);

export default App;
