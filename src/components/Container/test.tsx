import { renderWithTheme } from 'utils/tests/helpers'

import { Container } from '.'
import theme from 'styles/theme'

describe('<Container />', () => {
  it('should render the container', () => {
    const { container } = renderWithTheme(<Container>Hello World</Container>)

    expect(container.firstChild).toHaveTextContent('Hello World')

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container
    )

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        max-width: 130rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: calc(3.2rem / 2);
        padding-right: calc(3.2rem / 2);
      }

      <main
        class="c0"
      >
        Hello World
      </main>
    `)
  })
})
