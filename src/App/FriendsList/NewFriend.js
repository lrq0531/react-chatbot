import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import { toFindFriend } from '../../reducer/cockpit/actions'

class NewFriend extends React.Component {
  onClick = () => {
    this.props.dispatchFindFriendUrl()
  }

  render() {
    return (
      <button onClick={this.onClick}>
        <b>+</b>
      </button>
    )
  }
}

NewFriend.propTypes = {
  dispatchFindFriendUrl: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  dispatchFindFriendUrl: bindActionCreators(toFindFriend, dispatch),
})

export default connect(null, mapDispatchToProps)(NewFriend)
