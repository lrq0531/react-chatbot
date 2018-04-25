import React from 'react'
import PropTypes from 'prop-types'

const Friend = props => (
  <div>
    <button onClick={e => { props.onClickFriend(e, props.id) }}>
      {props.friendName}
    </button>
  </div>
)

Friend.propTypes = {
  id: PropTypes.string.isRequired,
  onClickFriend: PropTypes.func.isRequired,
  friendName: PropTypes.string.isRequired,
}

export default Friend
