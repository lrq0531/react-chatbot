import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import mapKeys from 'lodash/mapKeys'

import Friend from './Friend'
import NewFriend from './NewFriend'
import OnlineFriends from './OnlineFriends'

const style = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  border: '1px solid',
}
const FriendsList = props => {
  const friends = []

  mapKeys(props.friendsList, (friend, id) => (
    friends.push(
      <Friend
        friendId={id}
        key={id}
      />,
    )
  ))

  return (
    <div style={style}>
      <div style={style}>
        {friends}
      </div>
      <NewFriend />
      <OnlineFriends />
    </div>
  )
}

FriendsList.propTypes = {
  friendsList: PropTypes.object.isRequired,
}

const mapStateToProps = ({ cockpit }) => ({
  friendsList: cockpit.allFriends,
})

export default connect(mapStateToProps, null)(FriendsList)
