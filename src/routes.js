import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { State, Reducer } from './pages'

function Routes() {
  return (
    <Switch>
      <Route path='/' exact>
        <State />
      </Route>
      <Route path='/reducer'>
        <Reducer />
      </Route>
    </Switch>
  )
}

export default Routes
