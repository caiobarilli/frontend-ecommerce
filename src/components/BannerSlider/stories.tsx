import { Story, Meta } from '@storybook/react'
import BannerSlider, { BannerSliderProps } from '.'

const items = [
  {
    imageUrl: 'https://api.lorem.space/image/game?w=1042&h=580',
    title: 'Defy death 1',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonText: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'Bestselling'
  },
  {
    imageUrl: 'https://api.lorem.space/image/game?w=1042&h=581',
    title: 'Defy death 2',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonText: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  {
    imageUrl: 'https://api.lorem.space/image/game?w=1042&h=582',
    title: 'Defy death 3',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonText: 'Buy now',
    buttonLink: '/games/defy-death'
  }
]

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<BannerSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
)

export const Mobile: Story<BannerSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2'
  }
}
