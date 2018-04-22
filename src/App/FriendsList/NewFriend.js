import React from 'react'
import PropTypes from 'prop-types'

const NewFriend = ({onAddNewFriend}) => (
  <button onClick={onAddNewFriend}>
    <b>+</b>
  </button>
)

NewFriend.propTypes = {
  onAddNewFriend : PropTypes.func.isRequired,
}

export default NewFriend
