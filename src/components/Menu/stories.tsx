import { Story, Meta } from '@storybook/react'
import Menu, { MenuProps } from '.'

export default {
  title: 'COMPOUND COMPONENTS/Menu',
  component: Menu,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<MenuProps> = (args) => (
  <div
    style={{
      width: '104rem',
      margin: '0 auto'
    }}
  >
    <Menu {...args} />
  </div>
)

Default.parameters = {
  backgrounds: {
    default: 'dark'
  }
}

export const Mobile: Story<MenuProps> = (args) => <Menu {...args} />

Mobile.parameters = {
  backgrounds: {
    default: 'dark'
  },
  viewport: {
    defaultViewport: 'mobile2'
  }
}
