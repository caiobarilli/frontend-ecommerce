import { Story, Meta } from '@storybook/react'
import CardSlider, { CardSliderProps } from '.'

const items = [
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    image: 'https://api.lorem.space/image/game?w=300&h=140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    image: 'https://api.lorem.space/image/game?w=300&h=141',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    image: 'https://api.lorem.space/image/game?w=300&h=142',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    image: 'https://api.lorem.space/image/game?w=300&h=143',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    image: 'https://api.lorem.space/image/game?w=300&h=144',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    image: 'https://api.lorem.space/image/game?w=300&h=145',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  }
]

export default {
  title: 'CardSlider',
  component: CardSlider,
  args: { items, color: 'white' },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<CardSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <CardSlider {...args} />
  </div>
)

export const Mobile: Story<CardSliderProps> = (args) => <CardSlider {...args} />

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2'
  }
}
