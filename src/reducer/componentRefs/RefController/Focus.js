import { connect } from 'react-redux'

const Focus = ({ focusingRef }) => {
  if (typeof focusingRef !== 'undefined' && focusingRef !== null) {
    focusingRef.focus()
  }
  return ''
}

const mapStateToProps = ({ componentRefs }) => ({
  focusingRef: componentRefs.focusingRef,
  refChangeId: componentRefs.refChangeId,
})

export default connect(mapStateToProps, null)(Focus)
