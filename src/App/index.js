import React from 'react'

import Cockpit from './Cockpit'
import FriendsList from './FriendsList'

class App extends React.Component {
  constructor(props) {
    super(props)

    window.addEventListener('resize', () => {
      this.setState({})
    })
  }

  refOfInput = input => {
    this.inputRef = input
  }

  render() {
    const style = {
      display: 'flex',
      maxWidth: '90%',
      margin: 'auto',
      zIndex: -1,
    }

    return (
      <div style={{ ...style, height: (document.documentElement.clientHeight * 0.96) }}>
        <FriendsList />
        <Cockpit refOfInput={this.refOfInput} />
      </div>
    )
  }
}

export default App
