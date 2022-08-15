import { Story, Meta } from '@storybook/react/types-6-0'
import ExploreSidebar, { ExploreSidebarProps } from '.'

import items from './mock'

export default {
  title: 'COMPOUND COMPONENTS/Explore Sidebar',
  component: ExploreSidebar,
  args: {
    items,
    onFilter: () => console.log('filter')
  },
  parameters: {
    items: items,
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<ExploreSidebarProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSidebar {...args} />
  </div>
)

export const Mobile: Story<ExploreSidebarProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSidebar {...args} />
  </div>
)
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2'
  }
}

export const WithInitialValues: Story<ExploreSidebarProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSidebar
      {...args}
      initialValues={{
        platforms: ['windows', 'linux'],
        sort_by: 'high-to-low'
      }}
    />
  </div>
)
