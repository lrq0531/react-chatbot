import React from 'react';
import PropTypes from 'prop-types'

const SendMessage = ({ onClickSendMessage }) => (
  <button onClick={onClickSendMessage}>
    <b>Send</b>
  </button>
);

SendMessage.propTypes = {
  onClickSendMessage : PropTypes.func.isRequired,
}

export default SendMessage;
