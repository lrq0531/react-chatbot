import React from 'react'
import PropTypes from 'prop-types'
import MessageBar from './MessageBar'

class Conversations extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  shouldComponentUpdate({actionType}) {
    if (actionType !== 'confirmed') {
      return false;
    }
    else {
      return true;
    }
  }

  render() {
    const conversionMessages = []

    conversionMessages.push(
      this.props.myDisplayMessages.map((myMessageToDisplay, sequence) => (
        <MessageBar
          key = {sequence}
          displayMessage = {myMessageToDisplay}
        />
      ))
    )

    return(
      <div>
        {conversionMessages}
      </div>
    )
  }
}

Conversations.propTypes = {
  myDisplayMessages : PropTypes.arrayOf(PropTypes.string).isRequired,
  actionType : PropTypes.string.isRequired,
}

export default Conversations
