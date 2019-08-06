import { createStore as create, combineReducers, Action } from 'redux'
import { Settings } from './Settings'

export type Stores = {
  Settings: ReturnType<typeof Settings>
}

export function createStore() {
  const store = create<Stores, Action, unknown, unknown>(
    combineReducers({ Settings }),
    __DEV__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  return store
}
