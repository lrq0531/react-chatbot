import React from 'react'
import PropTypes from 'prop-types'

const style = {
  paddingRight: '20px',
  paddingLeft: '20px',
  paddingTop: '15px',
  paddingBottom: '15px',
  position: 'fixed',
  top: '30%',
  left: '40%',
  width: '20%',
  border: '2px solid',
  background: 'white',
}

class FindFriend extends React.Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  componentDidMount() {
    this.inputRef.current.focus()
  }

  render() {
    return (
      <form
        style={style}
        onSubmit={this.props.find}
      >
        <input ref={this.inputRef} />
        <button type="submit">Find</button>
      </form>
    )
  }
}

FindFriend.propTypes = {
  find: PropTypes.func.isRequired,
}

export default FindFriend
