import { waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-utils'
import { Email } from '@styled-icons/material-outlined'

import Input from '.'

describe('<Input />', () => {
  it('should render a input text with a label', () => {
    render(<Input id="name" name="name" label="Name" />)

    expect(screen.getByText(/Name/i)).toBeInTheDocument()
  })

  it('should render a input text with a placeholder', () => {
    render(<Input placeholder="Type your name" />)

    expect(screen.getByPlaceholderText(/Type your name/i)).toBeInTheDocument()
  })

  it('should render a input text with Icon in the left position by default', () => {
    render(<Input icon={<Email data-testid="icon" />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render a input text with icon in the right position', () => {
    render(
      <Input
        id="emailInput"
        icon={<Email data-testid="icon" />}
        iconPosition="right"
      />
    )

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({
      order: 1
    })
  })

  it('should get a new value on input change', async () => {
    const onInputChange = jest.fn()

    render(
      <Input id="name" name="name" label="Name" onInputChange={onInputChange} />
    )

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInputChange).toHaveBeenCalledTimes(text.length)
    })

    expect(onInputChange).toHaveBeenCalledWith(text)
  })

  it('should not get a new value on input change if is disabled', async () => {
    const onInput = jest.fn()
    render(
      <Input id="name" name="name" label="Name" onInput={onInput} disabled />
    )

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'

    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue('')
      expect(onInput).not.toHaveBeenCalled()
    })
  })

  it('should render a input text with a error', () => {
    render(<Input error="This is a error" hasError={true} />)

    expect(screen.getByText(/This is a error/i)).toBeInTheDocument()
  })
})
