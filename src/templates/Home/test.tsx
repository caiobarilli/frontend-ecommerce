import 'match-media-mock'

import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import bannerMock from 'components/BannerSlider/mock'
import gamesMock from 'components/CardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Home from '.'

const props = {
  banners: bannerMock,
  newGames: gamesMock,
  mostPopularHighlight: highlightMock,
  mostPopularGames: gamesMock,
  upcommingGames: gamesMock,
  upcomminghighlight: highlightMock,
  upcommingMoreGames: gamesMock,
  freeGames: gamesMock,
  freehighlight: highlightMock
}

jest.mock('next-auth/client', () => ({
  useSession: jest.fn(() => {
    return [{ session: null }]
  })
}))

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Menu"></div>
    }
  }
})

jest.mock('components/Heading', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Heading"></div>
    }
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Footer"></div>
    }
  }
})

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock BannerSlider"></div>
    }
  }
})

describe('<Home />', () => {
  it('should render the menu and footer', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByTestId('Mock Menu')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument()
  })
  it('should render the Heading and Showcase', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getAllByTestId('Mock Heading')).toHaveLength(2)
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(3)
  })
  it('should render the banner Slider', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByTestId('Mock BannerSlider')).toBeInTheDocument()
  })
})
