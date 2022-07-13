import { Story, Meta } from '@storybook/react/types-6-0'
import CartList, { CartListProps } from '.'

import mockItems from './mock'

export default {
  title: 'COMPOUND COMPONENTS/Cart List',
  component: CartList,
  args: {
    items: mockItems,
    total: 'R$ 330,00'
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: 800, padding: 10 }}>
    <CartList {...args} />
  </div>
)
