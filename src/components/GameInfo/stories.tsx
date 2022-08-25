import { Story, Meta } from '@storybook/react'
import { CartContextData } from 'hooks/use-cart'

import GameInfo, { GameInfoProps } from '.'

export default {
  title: 'COMPOUND COMPONENTS/Game Info',
  component: GameInfo,
  args: {
    title: 'The Last of Us Part II',
    description: 'The last chapter of the saga',
    price: '129.99'
  }
} as Meta

export const Default: Story<GameInfoProps> = (args) => (
  <div style={{ padding: 10 }}>
    <GameInfo {...args} />
  </div>
)

Default.parameters = {
  backgrounds: { default: 'dark' }
}

export const Mobile: Story<GameInfoProps> = (args) => (
  <div style={{ padding: 10 }}>
    <GameInfo {...args} />
  </div>
)

Mobile.parameters = {
  layout: 'mobile',
  backgrounds: { default: 'dark' },
  viewport: {
    defaultViewport: 'mobile2'
  }
}

export const IsInCart: Story<GameInfoProps & CartContextData> = (args) => (
  <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
    <GameInfo {...args} />
  </div>
)

IsInCart.args = {
  isInCart: () => true
}
