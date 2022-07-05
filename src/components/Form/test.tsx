import { renderWithTheme } from 'utils/tests/helpers'

import Form from '.'

describe('<Form />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Form>input</Form>)
  })
})
