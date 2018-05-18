import uid from '../../lib/index'

export const initialState = {
  refs: {
    refName: null,
  },
  mapToRefName: {
    'action.type': 'refName',
  },
  mapToFocusFunction: {
    /* 'action.type': payload => 'refName', */
  },
  focusingRef: null,
  refChangeId: uid(),
}
