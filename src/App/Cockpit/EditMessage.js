import React from 'react'
import PropTypes from 'prop-types'

class EditMessage extends React.Component {
  constructor(props) {
    super(props)

    this.inputRef = React.createRef()
  }

  componentDidMount() {
    this.inputRef.current.addEventListener('keyup', this.props.clearInputAfterEnter);
  }

  componentWillUnmount() {
    this.inputRef.current.removeEventListener('keyup')
  }

  render = () => (
    <input
      ref={this.inputRef}
      value={this.props.messageValue}
      onChange={this.props.onChangeMessage}
    />
  )
}

EditMessage.propTypes = {
  messageValue: PropTypes.string.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  clearInputAfterEnter: PropTypes.func.isRequired,
}

export default EditMessage
