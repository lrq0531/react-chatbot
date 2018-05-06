import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
// import { Provider } from 'react-redux'
import logger from 'redux-logger'
// import { thunk } from 'redux-thunk'

import reducer from './reducer'
import App from './App'

const middlewares = [
  // thunk,
  logger,
]

const store = createStore(reducer, applyMiddleware(...middlewares))

const render = () => ReactDOM.render(
  // <Provider store={store}>
  <App store={store} />,
  // </Provider>,
  document.getElementById('root'),
)

render()
store.subscribe(render)
