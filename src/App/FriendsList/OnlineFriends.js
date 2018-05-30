import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import { updateOnlineFriends } from '../../reducer/cockpit/actions'

class OnlineFriends extends React.Component {
  onClick = () => {
    this.props.dispatchUpdateOnlineFriends()
  }

  render() {
    return (
      <button onClick={this.onClick}>
        <b>Update</b>
      </button>
    )
  }
}

OnlineFriends.propTypes = {
  dispatchUpdateOnlineFriends: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  dispatchUpdateOnlineFriends: bindActionCreators(updateOnlineFriends, dispatch),
})

export default connect(null, mapDispatchToProps)(OnlineFriends)
