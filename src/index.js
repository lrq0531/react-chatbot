import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import { Route } from 'react-router'
import createHistory from 'history/createBrowserHistory'

import reducer from './reducer'
import App from './App'
import FindFriend from './App/FindFriend'

const history = createHistory()
const routing = routerMiddleware(history)

const middlewares = [
  routing,
  logger,
]

const store = createStore(reducer, applyMiddleware(...middlewares))

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route path="/" component={App} />
        <Route path="/find-friend" component={FindFriend} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)
