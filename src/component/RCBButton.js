import React from 'react'
import PropTypes from 'prop-types'

const RCBButton = props => (
  <button onClick={props.onClick}>
    <b>{props.name}</b>
  </button>
)

RCBButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}

export default RCBButton
