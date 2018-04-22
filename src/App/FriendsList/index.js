import React from 'react'
import PropTypes from 'prop-types'

import Friend from './Friend'
import NewFriend from './NewFriend'

const FriendsList = (props) => (
  <div>
    <Friend onClickFriend = {props.onClickFriend}/>
    <NewFriend onAddNewFriend = {props.onAddNewFriend}/>
  </div>
)

FriendsList.propTypes = {
  onAddNewFriend : PropTypes.func.isRequired,
  onClickFriend : PropTypes.func.isRequired,
}

export default FriendsList
