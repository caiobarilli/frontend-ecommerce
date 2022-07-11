import { renderWithTheme } from 'utils/tests/helpers'
import 'match-media-mock'
import items from './mock'

import CardSlider from '.'

describe('<CardSlider />', () => {
  it('should render the vertical slider', () => {
    const { container } = renderWithTheme(<CardSlider items={items} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(6)
  })

  it('should render white arrows when white color is passed', () => {
    const { container } = renderWithTheme(
      <CardSlider items={items} color="white" />
    )
    expect(container.querySelector('.slick-next')).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
