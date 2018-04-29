import React from 'react'
import PropTypes from 'prop-types'

const Friend = props => (
  <button onClick={props.onClickFriend}>
    {props.friendName}
  </button>
)

Friend.propTypes = {
  onClickFriend: PropTypes.func.isRequired,
  friendName: PropTypes.string.isRequired,
}

export default Friend
