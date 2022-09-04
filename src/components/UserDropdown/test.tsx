import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import UserDropdown from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

useRouter.mockImplementation(() => ({
  query: {}
}))

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    renderWithTheme(<UserDropdown username="next" />)
    expect(screen.getByText(/next/i)).toBeInTheDocument()
  })

  it('should render the menu', async () => {
    renderWithTheme(<UserDropdown username="next" />)

    // open menu
    userEvent.click(screen.getByText(/next/i))

    await waitFor(() => {
      expect(
        screen.getByRole('link', { name: /my profile/i })
      ).toBeInTheDocument()

      expect(
        screen.getByRole('link', { name: /wishlist/i })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: /sign out/i })
      ).toBeInTheDocument()
    })
  })
})
