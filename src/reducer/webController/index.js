import { initialState } from './initialState'
import * as actions from './actions'

const webController = (state = initialState, action) => {
  switch (action.type) {
    case actions.WINDOW_RESIZE:
      return ({
        ...state,
        height: document.documentElement.clientHeight * 0.96,
      })
    default:
      return state
  }
}

export default webController
