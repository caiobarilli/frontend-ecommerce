import { Story, Meta } from '@storybook/react/types-6-0'
import PaymentOptions, { PaymentOptionsProps } from '.'

import cardsMock from './mock'

export default {
  title: 'COMPOUND COMPONENTS/Payment Options',
  component: PaymentOptions,
  args: {
    cards: cardsMock
  }
} as Meta

export const Default: Story<PaymentOptionsProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 400 }}>
    <PaymentOptions {...args} />
  </div>
)
Default.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
