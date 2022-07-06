import Cards from 'components/CardSlider/mock'
import Highlight from 'components/Highlight/mock'
import { Story, Meta } from '@storybook/react'
import Showcase from '.'

export default {
  title: 'COMPOUND COMPONENTS/Showcase',
  component: Showcase
} as Meta

export const Default: Story = () => (
  <Showcase
    title="Free Games"
    freeGames={Cards}
    freeHighligth={Highlight}
    arrowColors="white"
    titleColor="white"
    lineColor="primary"
  />
)
