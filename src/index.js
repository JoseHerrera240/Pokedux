import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore
} from 'redux';
import { Provider } from 'react-redux';
import { logger } from './middlewares';
import thunk from 'redux-thunk';
import App from './App';
import './index.css';
import rootReducer from './reducers/rootReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composeAlt =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;
const composedEnhanchers = composeAlt(
  applyMiddleware(thunk, logger)
)

const store = createStore(rootReducer, composedEnhanchers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

