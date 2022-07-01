import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'
import { Email } from '@styled-icons/material-outlined'

import InputText from '.'

describe('<InputText />', () => {
  it('should render a input text with a label', () => {
    renderWithTheme(<InputText id="name" name="name" label="Name" />)

    expect(screen.getByText(/Name/i)).toBeInTheDocument()
  })

  it('should render a input text with a placeholder', () => {
    renderWithTheme(<InputText placeholder="Type your name" />)

    expect(screen.getByPlaceholderText(/Type your name/i)).toBeInTheDocument()
  })

  it('should render a input text with Icon in the left position by default', () => {
    renderWithTheme(<InputText icon={<Email data-testid="icon" />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render a input text with icon in the right position', () => {
    renderWithTheme(
      <InputText
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
    const onInput = jest.fn()
    renderWithTheme(
      <InputText id="name" name="name" label="Name" onInput={onInput} />
    )

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })

    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('should not get a new value on input change if is disabled', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <InputText
        id="name"
        name="name"
        label="Name"
        onInput={onInput}
        disabled
      />
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
    renderWithTheme(<InputText error="This is a error" hasError={true} />)

    expect(screen.getByText(/This is a error/i)).toBeInTheDocument()
  })
})
