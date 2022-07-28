// import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
// import userEvent from '@testing-library/user-event'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    renderWithTheme(<UserDropdown username="Nextjs" />)
  })

  it('should render the menu', () => {
    renderWithTheme(<UserDropdown username="User" />)

    // open menu
    // userEvent.click(screen.getByText(/User/i))

    // expect(
    //   screen.getByRole('link', { name: /my profile/i })
    // ).toBeInTheDocument()

    // expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
    // expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()
  })
})
