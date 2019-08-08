import React from 'react'

import { storiesOf } from '@storybook/react'
import { AppScreen } from '../src/components/screens/AppScreen'
import { addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

addDecorator(withInfo)
addDecorator(withKnobs)

storiesOf('screens', module).add('AppScreen', () => <AppScreen />)
