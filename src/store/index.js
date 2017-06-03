import { createStore, applyMiddleware, compose } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

let enhancer;
if (process.env.NODE_ENV === 'development') {
  enhancer = compose(
    applyMiddleware(apiMiddleware),
    DevTools.instrument(),
  );
} else {
  enhancer = applyMiddleware(apiMiddleware);
}

const store = createStore(rootReducer, enhancer);

export default store;
