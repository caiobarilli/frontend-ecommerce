import { Story, Meta } from '@storybook/react'
import Radio from '.'

export default {
  title: 'Radio',
  component: Radio
} as Meta

export const Default: Story = () => {
  return (
    <>
      <div style={{ marginBottom: 10 }}>
        <Radio
          id="radioOne"
          label="Yes"
          value="yes"
          name="yesOrNo"
          color="white"
        />
      </div>

      <Radio id="radioTwo" label="No" value="no" name="yesOrNo" color="white" />
    </>
  )
}
Default.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
