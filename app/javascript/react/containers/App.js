import React from 'react'
import {Router, browserHistory, Route, IndexRoute} from 'react-router'
import PaigeContainer from './PaigeContainer'

export const App = (props) => {
  return (
    <Router history={browserHistory}>
    <Route path='/paiges' component={PaigeContainer} />
    <Route path='/paiges/:id' component={Component} />
  </Router>)
}

export default App
