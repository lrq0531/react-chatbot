import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { StyleSheet, css, minify } from 'aphrodite'

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

    const color = (online || currentChatter === friendId) ? 'blue' : 'black'
    const fontWeight = (online || currentChatter === friendId) ? 'bold' : ''
    // const onlineBackgroundColor = online ? '' : ''
    const onlineBackgroundColor = online ? '#4CAF50' : 'grey'
    const backgroundColor = currentChatter === friendId ? 'pink' : onlineBackgroundColor

    const animationMove = {
      from: {
        position: 'absolute',
        bottom: '10%',
        display: 'flex',
      },
      to: {
        position: 'absolute',
        bottom: '66.14%',
      },
    }

    const animationFlash = {
      '0%': {
        backgroundColor,
      },
      '50%': {
        backgroundColor: 'red',
      },
      '100%': {
        backgroundColor,
      },
    }

    // Always keep the full style names
    minify(false)
    const styles = StyleSheet.create({
      divStyle: {
        display: 'flex',
        borderStyle: 'solid',
        borderWidth: '0px 0px 0.1px 0px',
      },
      friendStyle: {
        backgroundColor,
        color,
        fontWeight,
        flex: 5,
      },
      unreadStyle: {
        backgroundColor,
        color,
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
      },
      animationMoveStyle: {
        animationName: [animationMove],
        animationDuration: '2s',
        animationTimingFunction: 'ease',
      },
      animationFlashStyle: {
        animationName: [animationFlash],
        animationDuration: '5s',
        animationTimingFunction: 'liner',
        animationIterationCount: 'infinite',
        animationDirection: 'alternate',
      },
      hoverStyle: {
        ':hover': {
          transform: 'rotateX(360deg)',
          transition: 'all 3s ease',
        },
      },
    })

    return (
      <div className={css(styles.divStyle, styles.animationMoveStyle)}>
        <button
          className={css(
            styles.friendStyle,
            online && styles.animationFlashStyle,
            styles.hoverStyle,
          )}
          onClick={this.onClick}
        >
          {friendName}
        </button>
        {unread > 0 ? <div className={css(styles.unreadStyle)}>{unread}</div> : ''}
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
