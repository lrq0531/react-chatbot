import React from 'react'
import PropTypes from 'prop-types'

const style = {
  flex: 7,
}
const EditMessage = props => (
  <input
    style={style}
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
