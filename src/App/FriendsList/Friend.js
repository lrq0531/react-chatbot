import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Radium from 'radium'

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

    const color = (online || currentChatter === friendId) ? 'blue' : 'black'
    const fontWeight = (online || currentChatter === friendId) ? 'bold' : ''
    const onlineBackgroundColor = online ? '' : ''
    // const onlineBackgroundColor = online ? '#4CAF50' : ''
    const backgroundColor = currentChatter === friendId ? 'pink' : onlineBackgroundColor
    const style = {
      backgroundColor,
      color,
      fontWeight,
      flex: 5,
      transition: 'all 700ms ease-out',
    }

    const unreadStyle = {
      backgroundColor,
      color,
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
    }

    return (
      <div style={divStyle}>
        <button style={style} onClick={this.onClick}>
          {friendName}
        </button>
        {unread > 0 ? <div style={unreadStyle}>{unread}</div> : ''}
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

export default connect(mapStateToProps, mapDispatchToProps)(Radium(Friend))
