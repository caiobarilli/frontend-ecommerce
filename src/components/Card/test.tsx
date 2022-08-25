import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import item from './mock'

import Card from '.'

describe('<Card />', () => {
  it('should render the heading, image and wishlist icon', () => {
    renderWithTheme(<Card {...item} />)

    expect(
      screen.getByRole('heading', { name: /Red Dead Redemption 2/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Rockstar Games/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: /Red Dead Redemption 2/i })
    ).toBeInTheDocument()

    expect(screen.getByLabelText(/Add to Wishlist/i)).toBeInTheDocument()
  })

  it('should render the ribbon if it is passed', () => {
    renderWithTheme(<Card {...item} ribbon="Bestseller" />)

    expect(screen.getByText(/Bestseller/i)).toBeInTheDocument()
  })

  it('should render the promotional price if it is passed', () => {
    renderWithTheme(<Card {...item} />)

    expect(screen.getByText(/9.99/i)).not.toHaveStyle({
      textDecoration: 'line-through',
      color: '#8F8F8F'
    })

    expect(screen.getByText(/10.00/i)).toHaveStyle({
      textDecoration: 'line-through',
      color: '#8F8F8F'
    })
  })

  it('should click in the favorite icon and function onFavoriteHandler is called', () => {
    const onFavoriteHandler = jest.fn()
    renderWithTheme(
      <Card {...item} favorite onFavoriteHandler={onFavoriteHandler} />
    )

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFavoriteHandler).toBeCalled()
  })
})
