import { ADD_REF, SET_TO_FOCUS, ADD_TYPE_MAP, ADD_FUNC_MAP } from './actions'

const getRefAccordingToActionType = (state, type, payload) => {
  const refName = state.mapToRefName[type]
  if (typeof refName !== 'undefined') {
    return state.refs[refName]
  }

  const mapFunction = state.mapToFocusFunction[type]
  if (typeof mapFunction !== 'undefined') {
    return state.refs[mapFunction(type, payload)]
  }

  return state.focusingRef
}

const componentRefs = (state, { type, payload }) => {
  switch (type) {
    case ADD_REF:
      return ({
        ...state,
        refs: {
          ...state.refs,
          [payload.refName]: payload.componentRef,
        },
      })
    case SET_TO_FOCUS:
      return ({
        ...state,
        focusingRef: state.refs[payload.refName],
      })
    case ADD_TYPE_MAP:
      return ({
        ...state,
        mapToRefName: {
          ...state.mapToRefName,
          [payload.type]: payload.refName,
        },
      })
    case ADD_FUNC_MAP:
      return ({
        ...state,
        mapToFocusFunction: {
          ...state.mapToFocusFunction,
          [payload.type]: payload.func,
        },
      })
    default: {
      const newFocusingRef = getRefAccordingToActionType(state, type, payload)
      return ({
        ...state,
        focusingRef: typeof newFocusingRef !== 'undefined' ? newFocusingRef : state.focusingRef,
      })
    }
  }
}

export default componentRefs