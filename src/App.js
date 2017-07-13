import React from 'react'
import { connect } from 'react-redux'
import { incrementCount } from './app-reducer'

import rootReducer from './root-reducer'

const App = ({app, incrementCount}) => {
  const handleClick = () => {
    window.VAN.store.replaceReducer(rootReducer)
    incrementCount()
  }

  return (
    <div>
      <h1>React</h1>
      <pre>{JSON.stringify(app, null, 2)}</pre>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

const mapStateToProps = ({app}) => ({app})

export default connect(mapStateToProps, { incrementCount })(App)
