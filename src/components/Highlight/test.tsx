import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import items from './mock'

import Highlight from '.'

describe('<Highlight />', () => {
  it('should render the headings and button', () => {
    renderWithTheme(<Highlight {...items} />)

    expect(
      screen.getByRole('heading', { name: /Read Dead it’s back/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Come see John s new adventures/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /Buy Now/i })).toBeInTheDocument()
  })

  it('should render the headings, button and image', () => {
    renderWithTheme(<Highlight {...items} imageUrl="img/red-dead-float.png" />)

    expect(
      screen.getByRole('img', { name: /Read Dead it’s back/i })
    ).toBeInTheDocument()
  })

  it('should render the headings, buttons and image and align left', () => {
    renderWithTheme(
      <Highlight
        {...items}
        imageUrl="img/red-dead-float.png"
        alignment="left"
      />
    )

    expect(
      screen.getByRole('img', { name: /Read Dead it’s back/i })
    ).toHaveStyle({ 'margin-left': 'auto' })
  })

  it('should render the headings, buttons, image and align right by default', () => {
    renderWithTheme(<Highlight {...items} imageUrl="img/red-dead-float.png" />)
  })
})
