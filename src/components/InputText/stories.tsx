import { Story, Meta } from '@storybook/react'
import { Email } from '@styled-icons/material-outlined'

import InputText, { InputTextProps } from '.'

export default {
  title: 'Form/InputText',
  component: InputText,
  argTypes: {
    onInput: { action: 'changed' },
    icon: {
      table: {
        disable: true
      }
    }
  }
} as Meta

export const Default: Story<InputTextProps> = (args) => <InputText {...args} />
Default.args = {
  id: 'name',
  label: 'Name'
}

export const withIcon: Story<InputTextProps> = (args) => <InputText {...args} />
withIcon.args = {
  id: 'email',
  label: 'Email',
  placeholder: 'Enter your email',
  icon: <Email />
}

export const withErrors: Story<InputTextProps> = (args) => (
  <InputText {...args} />
)
withErrors.args = {
  id: 'email',
  label: 'Email',
  hasError: true,
  error: 'O campo acima deve ser um endereço de e-mail válido.',
  icon: <Email />
}
