import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore
} from 'redux';
import { pokemonsReducer } from './reducers/pokemons';
import { Provider } from 'react-redux';
import { logger } from './middlewares';
import thunk from 'redux-thunk';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const composedEnhanchers = composeAlt(
  applyMiddleware(thunk, logger)
)

const store = createStore(pokemonsReducer, composedEnhanchers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

