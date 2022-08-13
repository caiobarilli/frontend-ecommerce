import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { MockedProvider } from '@apollo/client/testing'
import { QUERY_GAMES } from 'graphql/queries/games'
import filterItemsMock from 'components/ExploreSidebar/mock'

import Games from '.'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/ExploreSidebar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>
  }
}))

jest.mock('components/Card', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock GameCard" />
  }
}))

describe('<Games />', () => {
  it('should render loading icon', () => {
    const { container } = renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(screen.getByTestId('Mock ExploreSidebar')).toBeInTheDocument()

    const svgEl = container.querySelector(
      "[xmlns='http://www.w3.org/2000/svg']"
    ) as HTMLImageElement

    expect(svgEl).toBeInTheDocument()
  })

  it('should render sections', async () => {
    renderWithTheme(
      <MockedProvider
        mocks={[
          {
            request: {
              query: QUERY_GAMES,
              variables: { limit: 15 }
            },
            result: {
              data: {
                games: [
                  {
                    name: 'Cyberpunk 2077',
                    slug: 'cyberpunk-2077',
                    cover: {
                      url: 'https://res.cloudinary.com/won-games/image/upload/v1621522979/cyberpunk_2077_fbfcbd0191.jpg'
                    },
                    developers: [{ name: 'CD PROJEKT RED' }],
                    price: 59.99,
                    __typename: 'Game'
                  }
                ]
              }
            }
          }
        ]}
        addTypename={false}
      >
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(
      await screen.findByRole('button', { name: /show more/i })
    ).toBeInTheDocument()

    expect(await screen.findByTestId('Mock GameCard')).toBeInTheDocument()
  })
})
