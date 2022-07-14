import { Story, Meta } from '@storybook/react/types-6-0'
import CardsList, { CardsListProps } from '.'

import cardsMock from 'components/PaymentOptions/mock'

export default {
  title: 'COMPOUND COMPONENTS/Cards List',
  component: CardsList,
  args: {
    cards: cardsMock
  }
} as Meta

export const Default: Story<CardsListProps> = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <CardsList {...args} />
  </div>
)
