import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import { Route } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import createSagaMiddleware from 'redux-saga'

import { reducer, sagaRoot } from './reducer'
import App from './App'
import FindFriend from './App/FindFriend'
import RefController from './reducer/componentRefs/RefController'
import ComponentFocusOrchestration from './App/ComponentFocusOrchestration'
import Tasks from './App/Tasks'

const history = createHistory()
const routing = routerMiddleware(history)
const sagaMiddleware = createSagaMiddleware()

const middlewares = [
  routing,
  logger,
  sagaMiddleware,
]

const store = createStore(reducer, applyMiddleware(...middlewares))

sagaMiddleware.run(sagaRoot)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route path="/" component={App} />
        <Route path="/find-friend" component={FindFriend} />
        {/* manager components */}
        <RefController />
        <ComponentFocusOrchestration />
        <Tasks />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)
