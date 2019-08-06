import React from 'react'
import { AppScreen } from 'shared/src/components/screens/AppScreen'

export default function Page() {
  return (
    <div>
      <h1>Hello</h1>
      <p>env: {process.env.app_env}</p>
      <AppScreen />
    </div>
  )
}
