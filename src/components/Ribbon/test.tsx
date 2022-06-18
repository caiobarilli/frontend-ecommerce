import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render the text', () => {
    renderWithTheme(<Ribbon> Best Seller </Ribbon>)
    expect(screen.getByText(/Best Seller/i)).toBeInTheDocument()
  })

  it('should render the text with a primary color', () => {
    renderWithTheme(<Ribbon> Best Seller </Ribbon>)
    expect(screen.getByText(/Best Seller/i)).toHaveStyle(
      'background-color:#F231A5'
    )
  })

  it('should render the text with a secondary color', () => {
    renderWithTheme(<Ribbon backgroundColor="secondary"> Best Seller </Ribbon>)
    expect(screen.getByText(/Best Seller/i)).toHaveStyle(
      'background-color:#3CD3C1'
    )
  })

  it('should render the text with a small size', () => {
    renderWithTheme(<Ribbon size="small"> Best Seller </Ribbon>)
    expect(screen.getByText(/Best Seller/i)).toHaveStyle('font-size: 1.2rem')
  })

  it('should render the text with a normal size', () => {
    renderWithTheme(<Ribbon> Best Seller </Ribbon>)
    expect(screen.getByText(/Best Seller/i)).toHaveStyle('font-size: 1.4rem')
  })
})
