import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import store from '../store';
import DevTools from './DevTools';
import PrivateRoute from './PrivateRoute';
import NoMatch from '../components/NoMatch';
import Home from './Home';
import Calories from './Calories';

const LoginPage = props => <Home mode="login" {...props} />;
const SignupPage = props => <Home mode="signup" {...props} />;

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <Router basename="/">
        <div>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
            <PrivateRoute path="/calories" component={Calories} />
            <Route component={NoMatch} />
          </Switch>

          {process.env.NODE_ENV === 'development' && <DevTools />}
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>
);

export default App;
