import { Story, Meta } from '@storybook/react'
import Radio from '.'

export default {
  title: 'Form/Radio',
  component: Radio,
  args: {
    color: 'white'
  }
} as Meta

export const Default: Story = (args) => {
  return (
    <>
      <div style={{ marginBottom: 10 }}>
        <Radio id="radioOne" label="Yes" value="yes" name="yesOrNo" {...args} />
      </div>

      <Radio id="radioTwo" label="No" value="no" name="yesOrNo" {...args} />
    </>
  )
}
Default.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
