import React from 'react'
import ReactDOM from 'react-dom'

import Form from './Form'

const style = {
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  // pointerEvents: 'none',
}

const FindFriend = () => (
  ReactDOM.createPortal(
    <div style={style}>
      <Form />
    </div>,
    document.getElementById('dialog'),
  )
)

export default FindFriend
