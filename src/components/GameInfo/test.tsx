import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameInfo from '.'

const props = {
  id: '1',
  title: 'The Last of Us Part II',
  description: 'The last chapter of the saga',
  price: '129.99'
}

describe('<GameInfo />', () => {
  it('should render the heading', () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: /The Last of Us Part II/i })
    ).toBeInTheDocument()
  })
})
