import React from 'react'
import PropTypes from 'prop-types'
import { map } from 'lodash';

import Friend from './Friend'
import NewFriend from './NewFriend'

const FriendsList = props => (
  <div>
    <div>
      {
        map(props.friendsList, friend => (
          <Friend
            onClickFriend={props.onClickFriend}
            friendName={friend.friendName}
            id={friend.id}
            key={friend.id}
          />
        ))
      }
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
