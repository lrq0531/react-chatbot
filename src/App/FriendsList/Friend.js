import React from 'react'
import PropTypes from 'prop-types'

const Friend = props => (
  <div>
    <button onClick={e => { props.onClick(e, props.id) }}>
      {props.name}
    </button>
  </div>
)

Friend.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Friend
