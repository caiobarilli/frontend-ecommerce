import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormRecovery from '.'

describe('<FormRecovery />', () => {
  it('should render the Form inputs', () => {
    renderWithTheme(<FormRecovery />)

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
  })
})
