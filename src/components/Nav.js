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
        height: 45,
        width: '100%'
      }}
      className='bg-primary'
    >
      <Row style={{ marginLeft: 5, paddingTop: 8 }}>
        {/* <FaBars color='#fff' style={{ fontSize: 25 }} /> */}
        <Link to='/' style={{ color: '#fff', marginLeft: 10 }}>
          State
        </Link>
        <Link to='/reducer' style={{ color: '#fff', marginLeft: 10 }}>
          Reducer
        </Link>
      </Row>
    </div>
  )
}

export default Nav
