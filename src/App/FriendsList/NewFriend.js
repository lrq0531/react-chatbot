import React from 'react'
import PropTypes from 'prop-types'

const style = {
  fontWeight: 'bold',
}

const NewFriend = ({ onAddNewFriend }) => (
  <button
    style={style}
    onClick={onAddNewFriend}
  >
    +
  </button>
)

NewFriend.propTypes = {
  onAddNewFriend: PropTypes.func.isRequired,
}

export default NewFriend
