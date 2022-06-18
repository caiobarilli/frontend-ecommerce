import { Story, Meta } from '@storybook/react'
import Card, { CardProps } from '.'

export default {
  title: 'Card',
  component: Card,
  args: {
    title: 'Red Dead Redemption 2',
    developer: 'Rockstar Games',
    image: 'https://api.lorem.space/image/game?w=300&h=140',
    price: '$250,00',
    promotionPrice: '$200,00',
    ribbon: '10% OFF'
  },
  argTypes: {
    onFavoriteHandler: { action: 'favorite' }
  }
} as Meta

export const Default: Story<CardProps> = (args) => <Card {...args} />
Default.parameters = {
  backgrounds: {
    default: 'dark'
  }
}

export const Mobile: Story<CardProps> = (args) => <Card {...args} />
Mobile.parameters = {
  backgrounds: {
    default: 'dark'
  },
  viewport: {
    defaultViewport: 'mobile2'
  }
}
