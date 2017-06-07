import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import store from './store';
import App from './containers/App';
import './index.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// // HMR
// if (module.hot) {
//   module.hot.accept('./containers/App', () => {
//     ReactDOM.render(<App />, document.getElementById('root'));
//   });
// }

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root'),
    );
  });
}
