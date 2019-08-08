import { configure } from '@storybook/react'
import { addParameters } from '@storybook/react'

const req = require.context('../stories', true, /\.stories\.tsx$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
addParameters({ viewport: { viewports: newViewports } })
