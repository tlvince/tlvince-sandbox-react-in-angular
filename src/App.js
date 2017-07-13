import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementCount, decrementCount } from './app-reducer'

function handler (event) {
  if (event.detail.type === 'decrement') {
    this.props.decrementCount()
  }
}

class App extends Component {
  componentDidMount () {
    document.body.addEventListener('action', handler.bind(this))
  }

  componentWillUnmount () {
    document.body.removeEventListener('action', handler.bind(this))
  }

  render () {
    const {app, incrementCount} = this.props
    return (
      <div>
        <h1>React</h1>
        <pre>{JSON.stringify(app, null, 2)}</pre>
        <button onClick={incrementCount}>Increment</button>
      </div>
    )
  }
}

const mapStateToProps = ({app}) => ({app})
const mapDispatchToProps = {
  incrementCount,
  decrementCount
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
