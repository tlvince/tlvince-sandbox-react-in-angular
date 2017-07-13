import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import rootReducer from './root-reducer'

const store = createStore(rootReducer, composeWithDevTools())
window.VAN.store = store

export default store
