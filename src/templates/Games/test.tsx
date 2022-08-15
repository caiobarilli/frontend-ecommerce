import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { MockedProvider } from '@apollo/client/testing'
import filterItemsMock from 'components/ExploreSidebar/mock'

import { gamesMock } from './mock'

import Games from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

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
      <MockedProvider mocks={[gamesMock]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(
      await screen.findByRole('button', { name: /show more/i })
    ).toBeInTheDocument()

    expect(await screen.findByTestId('Mock GameCard')).toBeInTheDocument()
  })
})
