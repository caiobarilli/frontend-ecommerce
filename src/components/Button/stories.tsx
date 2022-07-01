import { Story, Meta } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import { Heart as HeartIcon } from '@styled-icons/boxicons-regular/Heart'
import Button from '.'

export default {
  title: 'FORM/Button',
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
    },
    as: {
      table: {
        disable: true
      }
    }
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />
Default.args = {
  children: 'Buy'
}
Default.parameters = {
  backgrounds: {
    default: 'dark'
  }
}

export const withIcons: Story = (args) => <Button {...args} />
withIcons.args = {
  size: 'small',
  children: 'Buy',
  icon: <AddShoppingCart />
}
withIcons.parameters = {
  backgrounds: {
    default: 'dark'
  }
}

export const asLink: Story = (args) => <Button {...args} />
asLink.args = {
  size: 'large',
  children: 'Buy',
  as: 'a',
  href: '#'
}
asLink.parameters = {
  backgrounds: {
    default: 'dark'
  }
}

export const Minimal: Story = (args) => <Button {...args} />
Minimal.args = {
  size: 'small',
  children: 'Wishlist',
  icon: <HeartIcon />,
  minimal: true
}
Minimal.parameters = {
  backgrounds: {
    default: 'light'
  }
}
