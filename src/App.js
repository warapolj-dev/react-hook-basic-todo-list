import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Routes from './routes'
import { Nav } from './components'

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <div style={{ height: '90%' }}>
        <Routes />
      </div>
    </BrowserRouter>
  )
}

export default App
