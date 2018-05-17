import { connect } from 'react-redux'

const Focus = ({ ref }) => {
  if (typeof ref !== 'undefined') {
    ref.focus()
  }
  return ''
}

const mapStateToProps = ({ componentRefs }) => ({
  ref: componentRefs.focusingRef,
})

export default connect(mapStateToProps, null)(Focus)
