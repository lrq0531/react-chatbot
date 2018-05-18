import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { LOCATION_CHANGE } from 'react-router-redux/reducer'

import { addTypeMap, addFuncMap } from '../reducer/componentRefs/actions'
import * as cockpitActions from '../reducer/cockpit/actions'

const decideFocusComponentBasingOnRouterAction = ({ pathname }) => {
  switch (pathname) {
    case '/':
      return 'EditMessage'
    default:
      return ''
  }
}

const ComponentFocusOrchestration = props => {
  const { dispatchAddTypeMap, dispatchAddFuncMap } = props
  dispatchAddTypeMap(cockpitActions.SEND_MESSAGE, 'EditMessage')
  dispatchAddTypeMap(cockpitActions.PICK_FRIEND, 'EditMessage')
  dispatchAddTypeMap(cockpitActions.FIND_FRIEND, 'EditMessage')
  dispatchAddFuncMap(LOCATION_CHANGE, decideFocusComponentBasingOnRouterAction)

  return ''
}

const mapDispatchToProps = dispatch => ({
  dispatchAddTypeMap: bindActionCreators(addTypeMap, dispatch),
  dispatchAddFuncMap: bindActionCreators(addFuncMap, dispatch),
})

export default connect(null, mapDispatchToProps)(ComponentFocusOrchestration)
