import React from 'react'
import { Link } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import { FaBars } from 'react-icons/fa'

function Nav() {
  return (
    <div
      style={{
        position: 'relative',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'blue',
        height: 45,
        width: '100%'
      }}
    >
      <Row style={{ marginLeft: 5, paddingTop: 8 }}>
        <FaBars color='#fff' style={{ fontSize: 25 }} />
      </Row>
    </div>
  )
}

export default Nav
