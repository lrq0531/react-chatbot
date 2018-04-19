import React from 'react';
import PropTypes from 'prop-types'

const EditMessage = ({messageValue, onChangeMessage}) => (
  <input
    value={messageValue}
    onChange={onChangeMessage}
  />
);

EditMessage.propTypes = {
  messageValue : PropTypes.string.isRequired,
  onChangeMessage : PropTypes.func.isRequired,
}

export default EditMessage;
