import 'math-media-mock'

import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import items from './mock'

import BannerSlider from '.'

describe('<BannerSlider />', () => {
  it('should render vertical slider', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(3)
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)

    expect(screen.getByText('Defy death 1')).toBeInTheDocument()
    expect(screen.getByText('Defy death 2')).toBeInTheDocument()
    expect(screen.getByText('Defy death 3')).toBeInTheDocument()
  })

  it('should render dots', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-dots')).toBeInTheDocument()
  })
})
