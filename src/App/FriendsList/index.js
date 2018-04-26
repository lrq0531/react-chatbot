import React from 'react'
import PropTypes from 'prop-types'
import { map } from 'lodash'

import Friend from './Friend'
import NewFriend from './NewFriend'

const FriendsList = props => (
  <div>
    <div>
      {
        map(props.friends, friend => (
          <Friend
            key={friend.id}
            {...friend}
            onClick={props.onClickFriend}
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
  friends: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
}

export default FriendsList
