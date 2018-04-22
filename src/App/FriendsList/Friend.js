import React from 'react'
import PropTypes from 'prop-types'

const Friend = (props) => (
  <button onClick={props.onClickFriend}>
    Alex
  </button>
)

Friend.propTypes = {
  onClickFriend : PropTypes.func.isRequired,
}

export default Friend
