import React from 'react'
import PropTypes from 'prop-types'

const EditMessage = props => (
  <input
    placeholder="input"
    value={props.messageValue}
    onChange={props.onChangeMessage}
  />
)

EditMessage.propTypes = {
  messageValue: PropTypes.string.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
}

export default EditMessage
