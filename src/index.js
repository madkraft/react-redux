import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { applyMiddleware, createStore } from 'redux'

import App from './components/App';
import './index.css';


const defaultState = {
  appName: 'Conduit',
  articles: null
}
const reducer = function (state = defaultState, action) {
  return state
}
const store = createStore(reducer)

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
