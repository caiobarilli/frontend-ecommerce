import { Story, Meta } from '@storybook/react'
import { Email } from '@styled-icons/material-outlined'

import Input, { InputProps } from '.'

export default {
  title: 'Form/Input',
  component: Input,
  argTypes: {
    onInput: { action: 'changed' },
    icon: {
      table: {
        disable: true
      }
    }
  }
} as Meta

export const Default: Story<InputProps> = (args) => <Input {...args} />
Default.args = {
  id: 'name',
  label: 'Name'
}

export const withIcon: Story<InputProps> = (args) => <Input {...args} />
withIcon.args = {
  id: 'email',
  label: 'Email',
  placeholder: 'Enter your email',
  icon: <Email />
}

export const withErrors: Story<InputProps> = (args) => <Input {...args} />
withErrors.args = {
  id: 'email',
  label: 'Email',
  hasError: true,
  error: 'O campo acima deve ser um endereço de e-mail válido.',
  icon: <Email />
}
