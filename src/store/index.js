import { createStore, applyMiddleware, compose } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import persistState from 'redux-localstorage';
import rootReducer from '../reducers';
import DevTools from '../components/DevTools';

let enhancer;
if (process.env.NODE_ENV === 'development') {
  enhancer = compose(
    applyMiddleware(apiMiddleware),
    DevTools.instrument(),
    persistState(),
  );
} else {
  enhancer = compose(
    applyMiddleware(apiMiddleware),
    persistState(),
  );
}

const store = createStore(rootReducer, enhancer);

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }
}

export default store;
