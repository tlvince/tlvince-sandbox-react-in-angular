import React from 'react'
import { connect } from 'react-redux'
import { incrementCount } from './app-reducer'

const App = ({app, incrementCount}) =>
  <div>
    <h1>React</h1>
    <pre>{JSON.stringify(app, null, 2)}</pre>
    <button onClick={incrementCount}>Increment</button>
  </div>

const mapStateToProps = ({app}) => ({app})

export default connect(mapStateToProps, { incrementCount })(App)
