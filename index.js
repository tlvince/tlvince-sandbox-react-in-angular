import React, { Component } from 'react'

const StatelessButton = () => <h2>Button</h2>

export class InnerComponent extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <StatelessButton />
      </div>
    )
  }
}

export class Button extends Component {
  render() {
    return <InnerComponent />
  }
}
