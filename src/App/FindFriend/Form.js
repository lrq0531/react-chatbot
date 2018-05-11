import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { findFriend } from '../../reducer/cockpit/actions'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  componentDidMount() {
    this.inputRef.current.focus()
  }

  onSubmit = event => {
    const { find } = this.props
    event.preventDefault()
    const friend = event.target[0].value
    find(friend)
  }

  render() {
    const style = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '30%',
      height: '10%',
      border: '2px solid',
      background: 'white',
    }
    return (
      <form
        style={style}
        onSubmit={this.onSubmit}
      >
        <input ref={this.inputRef} />
        <button type="submit">Find</button>
      </form>
    )
  }
}

Form.propTypes = {
  find: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  find: bindActionCreators(findFriend, dispatch),
})

export default connect(null, mapDispatchToProps)(Form)
