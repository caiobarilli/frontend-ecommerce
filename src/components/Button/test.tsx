import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button from '.'

describe('<Button />', () => {
  it('should render a medium size by default', () => {
    const { container } = renderWithTheme(<Button>Buy</Button>)

    expect(screen.getByRole('button', { name: /Buy/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.6rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a small button when size is passed as small', () => {
    renderWithTheme(<Button size="small">Buy</Button>)

    expect(screen.getByRole('button', { name: /Buy/i })).toHaveStyle({
      height: '3rem',
      padding: '0.8rem',
      'font-size': '1.2rem'
    })
  })

  it('should render a large button when size is passed as large', () => {
    renderWithTheme(<Button size="large">Buy</Button>)

    expect(screen.getByRole('button', { name: /Buy/i })).toHaveStyle({
      height: '4.35rem',
      padding: '0 3.2rem',
      'font-size': '1.6rem'
    })
  })

  it('should render a full width button when fullWidth is passed as true', () => {
    renderWithTheme(<Button fullWidth>Buy</Button>)

    expect(screen.getByRole('button', { name: /Buy/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render a button with icon', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy</Button>
    )

    expect(screen.getByTestId('icon')).toBeInTheDocument()
    expect(screen.getByText(/Buy/i)).toBeInTheDocument()
  })

  it('should render a button with minimal display', () => {
    renderWithTheme(
      <Button minimal icon={<AddShoppingCart data-testid="icon" />}>
        Buy
      </Button>
    )
  })

  it('should render a button as a link', () => {
    renderWithTheme(
      <Button as="a" href="https://www.google.com">
        Buy Now
      </Button>
    )

    expect(screen.getByRole('link', { name: /Buy Now/i })).toHaveAttribute(
      'href',
      'https://www.google.com'
    )
  })

  it('should render a disabled Button', () => {
    renderWithTheme(<Button disabled>Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled'
      }
    )
  })
})
