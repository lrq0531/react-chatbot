import React from 'react'
import PropTypes from 'prop-types'

const EditMessage = props => {
  const style = {
    flex: 7,
  }

  return (
    <input
      style={style}
      ref={props.refOfInput}
      placeholder="Happy chatting"
      value={props.message}
      onChange={props.onChangeMessage}
    />
  )
}

EditMessage.propTypes = {
  message: PropTypes.string.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  refOfInput: PropTypes.func.isRequired,
}

export default EditMessage
