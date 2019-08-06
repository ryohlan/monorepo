/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Fragment } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar
} from 'react-native'

import { Header, Colors } from 'react-native/Libraries/NewAppScreen'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation'
import { AppScreen } from 'shared/src/components/screens/AppScreen'

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <AppScreen />
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  engine: {
    position: 'absolute',
    right: 0
  },
  body: {
    backgroundColor: Colors.white
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark
  },
  highlight: {
    fontWeight: '700'
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right'
  }
})

export default createAppContainer(
  createBottomTabNavigator({
    App,
    Setting: () => (
      <SafeAreaView>
        <Header />
        <Text>Settings</Text>
      </SafeAreaView>
    )
  })
)
