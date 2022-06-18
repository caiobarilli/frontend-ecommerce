import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render the heading of first column', () => {
    renderWithTheme(<Footer />)
    expect(
      screen.getByRole('heading', { name: /Contact/i })
    ).toBeInTheDocument()
  })

  it('should render the heading of second column', () => {
    renderWithTheme(<Footer />)
    expect(
      screen.getByRole('heading', { name: /Follow us/i })
    ).toBeInTheDocument()
  })

  it('should render the social links of seconde column', () => {
    renderWithTheme(<Footer />)
    expect(screen.getByRole('link', { name: /Instagram/i })).toBeInTheDocument()
  })

  it('should render the heading of third column', () => {
    renderWithTheme(<Footer />)
    expect(screen.getByRole('heading', { name: /Links/i })).toBeInTheDocument()
  })

  it('should render the heading of fourth column', () => {
    renderWithTheme(<Footer />)
    expect(
      screen.getByRole('heading', { name: /Location/i })
    ).toBeInTheDocument()
  })

  it('should render the copyright text in the last row', () => {
    renderWithTheme(<Footer />)
    expect(
      screen.getByText(/Won Games 2020 © All rights reserved./i)
    ).toBeInTheDocument()
  })
})
