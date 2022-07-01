import { Story, Meta } from '@storybook/react'
import Logo, { LogoProps } from '.'

export default {
  title: 'SINGLE COMPONENTS/Logo',
  component: Logo
} as Meta

export const Default: Story<LogoProps> = (args) => <Logo {...args} />

Default.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
