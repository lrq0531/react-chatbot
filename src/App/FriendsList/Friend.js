import React from 'react'
import PropTypes from 'prop-types'

const Friend = props => (
  <div>
    <button onClick={props.onClickFriend}>
      {props.friendName}
    </button>
  </div>
)

Friend.propTypes = {
  onClickFriend: PropTypes.func.isRequired,
  friendName: PropTypes.string.isRequired,
}

export default Friend
