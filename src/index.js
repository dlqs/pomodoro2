import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import counterApp from './reducers'
import App from './components/App';

const store = createStore(counterApp)

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>
  , document.getElementById('root')
);
