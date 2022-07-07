import { Story, Meta } from '@storybook/react'
import GameInfo, { GameInfoProps } from '.'

export default {
  title: 'COMPOUND COMPONENTS/GameInfo',
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
