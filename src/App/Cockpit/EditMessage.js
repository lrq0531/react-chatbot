import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class EditMessage extends React.Component {

  constructor(props) {
    super(props)
    this.props = props
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this).addEventListener('keyup', this.props.clearInputAfterEnter);
  }

  componentWillUnmount() {
    ReactDOM.findDOMNode(this).removeEventListener('keyup')
  }

  render = () => (
    <input
      value={this.props.messageValue}
      onChange={this.props.onChangeMessage}
    />
  )
}

EditMessage.propTypes = {
  messageValue : PropTypes.string.isRequired,
  onChangeMessage : PropTypes.func.isRequired,
  clearInputAfterEnter : PropTypes.func.isRequired,
}

export default EditMessage
