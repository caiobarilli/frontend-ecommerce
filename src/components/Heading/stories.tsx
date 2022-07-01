import { Story, Meta } from '@storybook/react'
import Heading, { HeadingProps } from '.'

export default {
  title: 'SINGLE COMPONENTS/Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />

Default.args = {
  children: 'Most Populars'
}

Default.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
