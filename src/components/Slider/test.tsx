import 'math-media-mock'
import { screen } from '@testing-library/react'
import { Settings } from 'react-slick'
import { renderWithTheme } from 'utils/tests/helpers'

import Slider from '.'

const settingsHorizontal: Settings = {
  infinite: false,
  slidesToShow: 1
}

describe('<Slider />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <Slider settings={settingsHorizontal}>
        <div>item</div>
        <div>2</div>
        <div>3</div>
      </Slider>
    )

    expect(screen.getByText(/item/i)).toBeInTheDocument()

    expect(container.querySelector('.slick-slide')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
