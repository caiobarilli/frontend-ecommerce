import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Form from '.'

describe('<Form />', () => {
  it('should render the form container with children', () => {
    renderWithTheme(
      <Form>
        <input type="text" placeholder="Nome" />
      </Form>
    )

    expect(screen.getByPlaceholderText(/nome/i)).toBeInTheDocument()
  })
})
