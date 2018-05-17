import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addRef, setToFocus } from '../../../reducer/componentRefs/actions'

class EditMessage extends React.Component {
  refOfInput = ref => {
    const { dispatchAddRef, dispatchSetToFocus } = this.props
    dispatchAddRef('EditMessage', ref)
    dispatchSetToFocus('EditMessage')
  }

  render() {
    const style = {
      flex: 7,
    }

    return (
      <input
        style={style}
        ref={this.refOfInput}
        placeholder="Happy chatting"
        value={this.props.message}
        onChange={this.props.onChangeMessage}
      />
    )
  }
}

EditMessage.propTypes = {
  message: PropTypes.string.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  dispatchAddRef: PropTypes.func.isRequired,
  dispatchSetToFocus: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  dispatchAddRef: bindActionCreators(addRef, dispatch),
  dispatchSetToFocus: bindActionCreators(setToFocus, dispatch),
})

export default connect(null, mapDispatchToProps)(EditMessage)
