import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

const styles = {
  base: {
    // width: '130px',
    height: '20px',
    fontSize: '11px',
    fontWeight: 500,
  },
  browserState: {
    ':hover': {
      backgroundColor: 'red',
      // boxShadow: '0 3px 0 rgba(0,0,0,0.2)',
      borderRadius: '6px',
      // width: '130px',
      height: '23px',
      fontSize: '13px',
      fontWeight: 'bold',
      transition: 'all 800ms ease-out',
      // transition: 'transform 1s,opacity 1s,background 1s,width 1s,height 1s,font-size 1s',
    },
    ':focus': {
      backgroundColor: 'green',
    },
    ':active': {
      backgroundColor: 'yellow',
    },
  },
}

const RCBButton = props => (
  <button style={[styles.base, styles.browserState]} onClick={props.onClick}>
    {props.name}
  </button>
)

RCBButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}

export default Radium(RCBButton)
