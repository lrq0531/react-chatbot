export const ADD_REF = 'COMPONENTREFS/ADD_REF'
export const SET_TO_FOCUS = 'COMPONENTREFS/SET_TO_FOCUS'
export const ADD_TYPE_MAP = 'COMPONENTREFS/ADD_TYPE_MAP'
export const ADD_FUNC_MAP = 'COMPONENTREFS/ADD_FUNC_MAP'

export const addRef = (refName, componentRef) => ({
  type: ADD_REF,
  payload: {
    refName,
    componentRef,
  },
})

export const setToFocus = refName => ({
  type: SET_TO_FOCUS,
  payload: {
    refName,
  },
})

export const addTypeMap = (type, refName) => ({
  type: ADD_TYPE_MAP,
  payload: {
    type,
    refName,
  },
})

export const addFuncMap = (type, func) => ({
  type: ADD_FUNC_MAP,
  payload: {
    type,
    func,
  },
})
