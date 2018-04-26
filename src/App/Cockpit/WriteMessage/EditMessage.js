import React from 'react'
import PropTypes from 'prop-types'

const EditMessage = props => (
  <input
    ref={props.refOfInput}
    placeholder="Happy chatting"
    value={props.messageValue}
    onChange={props.onChangeMessage}
  />
)

EditMessage.propTypes = {
  messageValue: PropTypes.string.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  refOfInput: PropTypes.func.isRequired,
}

export default EditMessage
