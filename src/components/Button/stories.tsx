import { Story, Meta } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      table: {
        disable: true
      }
    },
    onClick: {
      table: {
        disable: true
      }
    }
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />

export const withIcons: Story = (args) => <Button {...args} />

export const asLink: Story = (args) => <Button {...args} />

Default.args = {
  children: 'Buy'
}

withIcons.args = {
  size: 'small',
  children: 'Buy',
  icon: <AddShoppingCart />
}

asLink.args = {
  size: 'large',
  children: 'Buy',
  as: 'a',
  href: '#'
}
