import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Radium from 'radium'

import { windowResize } from '../reducer/webController/actions'
import Cockpit from './Cockpit'
import FriendsList from './FriendsList'

class App extends React.Component {
  constructor(props) {
    super(props)

    window.addEventListener('resize', props.dispatchWindowResize)
  }

  render() {
    const style = {
      layout: {
        display: 'flex',
        margin: 'auto',
      },

      layer: {
        zIndex: -1,
      },
      windowSize: {
        maxWidth: '90%',
        height: this.props.height,
      },
    }

    return (
      <div style={[style.layout, style.layer, style.windowSize]}>
        <FriendsList />
        <Cockpit />
      </div>
    )
  }
}

App.propTypes = {
  height: PropTypes.number.isRequired,
  dispatchWindowResize: PropTypes.func.isRequired,
}

const mapStateToProps = ({ webController }) => ({
  height: webController.height,
})

const mapDispatchToProps = dispatch => ({
  dispatchWindowResize: bindActionCreators(windowResize, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Radium(App))
