import { Story, Meta } from '@storybook/react'

import Banner, { BannerProps } from '.'

export default {
  title: 'COMPOUND COMPONENTS/Banner',
  component: Banner,
  args: {
    imageUrl: 'https://api.lorem.space/image/game?w=1042&h=583',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    buttonText: 'Buy now',
    ribbon: 'My Ribbon',
    ribbonSize: 'small',
    ribbonColor: 'primary'
  }
} as Meta

export const Default: Story<BannerProps> = (args) => (
  <div
    style={{
      width: '104rem',
      margin: '0 auto'
    }}
  >
    <Banner {...args} />
  </div>
)

Default.parameters = {
  backgrounds: {
    default: 'dark'
  }
}

export const Mobile: Story<BannerProps> = (args) => <Banner {...args} />

Mobile.parameters = {
  backgrounds: {
    default: 'dark'
  },
  viewport: {
    defaultViewport: 'mobile2'
  }
}
