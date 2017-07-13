import React from 'react'
import { Provider } from 'react-redux'

import App from './App'

const Root = () =>
  <Provider store={window.VAN.store}>
    <App />
  </Provider>

export default Root
