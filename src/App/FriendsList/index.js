import React from 'react'
import PropTypes from 'prop-types'
import mapKeys from 'lodash/mapKeys'

import Friend from './Friend'
import NewFriend from './NewFriend'

const style = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  border: '1px',
  overflowY: 'auto',
}
const FriendsList = props => {
  const friends = []

  mapKeys(props.friendsList, (friend, id) => (
    friends.push(
      <Friend
        onClickFriend={e => { props.onClickFriend(e, id) }}
        friendName={friend.friendName}
        key={id}
      />,
    )
  ))

  return (
    <div style={style}>
      <div style={style}>
        {friends}
      </div>
      <NewFriend onAddNewFriend={props.onAddNewFriend} />
    </div>
  )
}

FriendsList.propTypes = {
  onAddNewFriend: PropTypes.func.isRequired,
  onClickFriend: PropTypes.func.isRequired,
  friendsList: PropTypes.object.isRequired,
}

export default FriendsList
