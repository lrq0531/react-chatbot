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
    const style = {
      backgroundColor: this.props.online ? '#4CAF50' : '',
      color: this.props.online ? 'white' : 'black',
    }
    return (
      <button style={style} onClick={this.onClick}>
        {this.props.friendName}
      </button>
    )
  }
}

Friend.propTypes = {
  dispatchPickFriend: PropTypes.func.isRequired,
  friendName: PropTypes.string.isRequired,
  friendId: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
}

const mapStateToProps = ({ cockpit }, ownProps) => ({
  friendName: cockpit.allFriends[ownProps.friendId].friendName,
  online: cockpit.allFriends[ownProps.friendId].online,
})

const mapDispatchToProps = dispatch => ({
  dispatchPickFriend: bindActionCreators(pickFriend, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Friend)
