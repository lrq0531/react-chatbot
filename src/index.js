import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
// import { thunk } from 'redux-thunk'

import reducer from './reducer'
import App from './App'

const middlewares = [
  // thunk,
  createLogger]

const store = createStore(reducer, applyMiddleware(...middlewares))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
