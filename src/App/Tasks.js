import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { updateOnlineFriends, updateMessage } from '../reducer/cockpit/actions'

const Tasks = props => {
  setInterval(props.dispatchUpdateMessage, 3000, 'Me')
  setInterval(props.dispatchUpdateOnlineFriends, 5000, 'Me')
  return ''
}

Tasks.propTypes = {
  dispatchUpdateOnlineFriends: PropTypes.func.isRequired,
  dispatchUpdateMessage: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  dispatchUpdateOnlineFriends: bindActionCreators(updateOnlineFriends, dispatch),
  dispatchUpdateMessage: bindActionCreators(updateMessage, dispatch),
})

export default connect(null, mapDispatchToProps)(Tasks)
