import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import mapKeys from 'lodash/mapKeys'
import { bindActionCreators } from 'redux'

import Friend from './Friend'
import RCBButton from '../../component/RCBButton'
import { updateOnlineFriends, toFindFriend } from '../../reducer/cockpit/actions'

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
      <RCBButton name="+" onClick={props.dispatchToFindFriend} />
      <RCBButton name="Update" onClick={props.dispatchUpdateOnlineFriends} />
    </div>
  )
}

FriendsList.propTypes = {
  friendsList: PropTypes.object.isRequired,
  dispatchUpdateOnlineFriends: PropTypes.func.isRequired,
  dispatchToFindFriend: PropTypes.func.isRequired,
}

const mapStateToProps = ({ cockpit }) => ({
  friendsList: cockpit.allFriends,
})

const mapDispatchToProps = dispatch => ({
  dispatchToFindFriend: bindActionCreators(toFindFriend, dispatch),
  dispatchUpdateOnlineFriends: bindActionCreators(updateOnlineFriends, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList)
