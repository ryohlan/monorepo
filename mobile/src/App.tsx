import React from 'react'
import { StatusBar } from 'react-native'

import { AppScreen } from '@mono/core/src/components/screens/AppScreen'

export const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AppScreen />
    </>
  )
}
