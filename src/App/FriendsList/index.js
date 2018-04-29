import React from 'react'
import PropTypes from 'prop-types'

import Friend from './Friend'
import NewFriend from './NewFriend'

const style = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  border: '1px',
  overflowY: 'auto',
}
const FriendsList = props => (
  <div style={style}>
    <div style={style}>
      {props.friendsList.map(friend => (
        <Friend
          onClickFriend={e => { props.onClickFriend(e, friend.id) }}
          friendName={friend.friendName}
          key={friend.id}
        />
      ))}
    </div>
    <NewFriend onAddNewFriend={props.onAddNewFriend} />
  </div>
)

FriendsList.propTypes = {
  onAddNewFriend: PropTypes.func.isRequired,
  onClickFriend: PropTypes.func.isRequired,
  friendsList: PropTypes.arrayOf(PropTypes.shape({
    friendName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
}

export default FriendsList
