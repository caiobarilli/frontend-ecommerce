import { Story, Meta } from '@storybook/react'
import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  args: {
    label: 'Checkbox',
    id: 'checkbox'
  },
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Default: Story<CheckboxProps> = (args) => <Checkbox {...args} />
Default.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
