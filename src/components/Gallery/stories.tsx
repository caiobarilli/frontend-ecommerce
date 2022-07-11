import { Story, Meta } from '@storybook/react/types-6-0'
import Gallery, { GalleryProps } from '.'
import items from './mock'

export default {
  title: 'COMPOUND COMPONENTS/Gallery',
  component: Gallery,
  args: {
    items
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta<GalleryProps>

export const Default: Story<GalleryProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Gallery {...args} />
  </div>
)

Default.parameters = {
  backgrounds: {
    default: 'dark'
  }
}

export const Mobile: Story<GalleryProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Gallery {...args} />
  </div>
)

Mobile.parameters = {
  backgrounds: {
    default: 'dark'
  },
  viewport: {
    defaultViewport: 'mobile2'
  }
}
