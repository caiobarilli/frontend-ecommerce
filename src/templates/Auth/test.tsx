import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Auth from '.'

describe('<Auth />', () => {
  it('should render the Form Title', () => {
    renderWithTheme(
      <Auth formTitle="Form Title">
        <p>Example</p>
      </Auth>
    )

    expect(
      screen.getByRole('heading', { name: /Form Title/i })
    ).toBeInTheDocument()
  })
})
