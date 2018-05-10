import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { typeMessage, sendMessage } from '../../../reducer/cockpit/actions'
import EditMessage from './EditMessage'
import SendMessage from './SendMessage'

class WriteMessage extends React.Component {
  onChangeMessage = event => {
    const { dispatchTypeMessage } = this.props
    dispatchTypeMessage(event.target.value)
  }

  onSubmit = event => {
    event.preventDefault()
    const { message, friend, dispatchSendMessage } = this.props
    dispatchSendMessage(message, 'me', friend)
  }

  render() {
    const style = {
      display: 'flex',
    }
    return (
      <form
        style={style}
        onSubmit={this.onSubmit}
      >
        <EditMessage
          message={this.props.message}
          onChangeMessage={this.onChangeMessage}
          refOfInput={this.props.refOfInput}
        />
        <SendMessage />
      </form>
    )
  }
}

WriteMessage.propTypes = {
  message: PropTypes.string.isRequired,
  friend: PropTypes.string.isRequired,
  dispatchTypeMessage: PropTypes.func.isRequired,
  dispatchSendMessage: PropTypes.func.isRequired,
  refOfInput: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  message: state.cockpit.message,
  friend: state.cockpit.friend,
})

const mapDispatchToProps = dispatch => ({
  dispatchTypeMessage: bindActionCreators(typeMessage, dispatch),
  dispatchSendMessage: bindActionCreators(sendMessage, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(WriteMessage)
