import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Cards from 'components/CardSlider/mock'
import Highlight from 'components/Highlight/mock'

import 'match-media-mock'

import Showcase from '.'

describe('<Showcase />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <Showcase
        title="Free Games"
        Games={Cards}
        Highligth={Highlight}
        arrowColors="white"
        titleColor="white"
        lineColor="primary"
      />
    )

    expect(screen.getByText('Free Games')).toBeInTheDocument()
  })
})
