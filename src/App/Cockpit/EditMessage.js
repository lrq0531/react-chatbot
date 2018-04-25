import React from 'react'
import PropTypes from 'prop-types'

class EditMessage extends React.Component {
  constructor(props) {
    super(props);

    this.input = React.createRef();
  }

  componentDidMount() {
    this.props.inputRef(this.input.current);
    this.input.current.focus()
  }

  render() {
    return (
      <input
        ref={this.input}
        placeholder="input"
        value={this.props.messageValue}
        onChange={this.props.onChangeMessage}
      />
    )
  }
}

EditMessage.propTypes = {
  messageValue: PropTypes.string.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  inputRef: PropTypes.func.isRequired,
}

export default EditMessage
