import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Cards from 'components/CardSlider/mock'
import Highlight from 'components/Highlight/mock'

import 'match-media-mock'

import Showcase from '.'

describe('<Showcase />', () => {
  it('should render all props', () => {
    renderWithTheme(
      <Showcase title="Free Games" Games={Cards} Highligth={Highlight} />
    )

    expect(screen.getByText('Free Games')).toBeInTheDocument()
  })
})
