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
    const {
      currentChatter,
      online,
      friendId,
      friendName,
      unread,
    } = this.props

    const divStyle = {
      display: 'flex',
      borderStyle: 'solid',
      borderWidth: '0px 0px 0.1px 0px',
    }

    const onlineBackgroundColor = online ? '#4CAF50' : ''
    const style = {
      backgroundColor: currentChatter === friendId ? 'pink' : onlineBackgroundColor,
      color: (online || currentChatter === friendId) ? 'white' : 'black',
      flex: 3,
    }

    return (
      <div style={divStyle}>
        <button style={style} onClick={this.onClick}>
          {friendName}
        </button>
        {unread > 0 ? <div>{unread}</div> : ''}
      </div>
    )
  }
}

Friend.propTypes = {
  dispatchPickFriend: PropTypes.func.isRequired,
  friendName: PropTypes.string.isRequired,
  friendId: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
  unread: PropTypes.number.isRequired,
  currentChatter: PropTypes.string.isRequired,
}

const mapStateToProps = ({ cockpit }, ownProps) => ({
  friendName: cockpit.allFriends[ownProps.friendId].friendName,
  online: cockpit.allFriends[ownProps.friendId].online,
  unread: typeof cockpit.allFriends[ownProps.friendId].unread !== 'undefined'
    ? cockpit.allFriends[ownProps.friendId].unread
    : 0,
  currentChatter: cockpit.friend,
})

const mapDispatchToProps = dispatch => ({
  dispatchPickFriend: bindActionCreators(pickFriend, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Friend)
