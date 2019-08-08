import React from 'react'

import { storiesOf } from '@storybook/react'
import { Button } from '../src/components/bases/buttons/Button'
import { addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

addDecorator(withInfo)
addDecorator(withKnobs)

storiesOf('bases', module).add('Button', () => (
  <Button
    text={text('text', 'Button')}
    textColor={text('textColor', 'white')}
    textBackgroundColor={text('textBackgroundColor', '#555')}
    onPress={action('onPress')}
  />
))
