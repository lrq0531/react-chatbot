import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { pickFriend } from '../../reducer/cockpit/actions'

class Friend extends React.Component {
  onClick = () => {
    const { dispatchPickFriend, friendId } = this.props
    dispatchPickFriend(friendId)
  }

  render() {
    return (
      <button onClick={this.onClick}>
        {this.props.friendName}
      </button>
    )
  }
}

Friend.propTypes = {
  dispatchPickFriend: PropTypes.func.isRequired,
  friendName: PropTypes.string.isRequired,
  friendId: PropTypes.string.isRequired,
}

const mapStateToProps = ({ cockpit }, ownProps) => ({
  friendName: cockpit.allFriends[ownProps.friendId].friendName,
})

const mapDispatchToProps = dispatch => ({
  dispatchPickFriend: bindActionCreators(pickFriend, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Friend)
