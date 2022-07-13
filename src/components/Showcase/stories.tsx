import Cards from 'components/CardSlider/mock'
import Highlight from 'components/Highlight/mock'
import { Story, Meta } from '@storybook/react'
import Showcase, { ShowcaseProps } from '.'

export default {
  title: 'COMPOUND COMPONENTS/Showcase',
  component: Showcase,
  args: {
    lineLeft: true,
    title: 'Free Games',
    arrowColors: 'white',
    titleColor: 'white',
    lineColor: 'primary'
  }
} as Meta

export const Default: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} Games={Cards} highlight={Highlight} />
)

Default.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
