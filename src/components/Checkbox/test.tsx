import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import theme from 'styles/theme'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render the checkbox', () => {
    renderWithTheme(<Checkbox label="Checkbox" />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByText(/checkbox/i)).toBeInTheDocument()
  })

  it('should render the checkbox with a white label by default', () => {
    renderWithTheme(<Checkbox label="Checkbox" id="checkbox" />)
    expect(screen.getByText(/checkbox/i)).toHaveStyle({
      color: theme.colors.white
    })
  })

  it('should render the checkbox with a black label', () => {
    renderWithTheme(<Checkbox color="black" label="Checkbox" id="checkbox" />)
    expect(screen.getByText(/checkbox/i)).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should dispatch onCheck function when status changes', async () => {
    const onCheck = jest.fn()

    renderWithTheme(
      <Checkbox label="Checkbox" id="checkbox" onCheck={onCheck} />
    )

    userEvent.click(screen.getByRole('checkbox'))

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
  })

  it('should be acccessible with tab', () => {
    renderWithTheme(<Checkbox label="Checkbox" id="checkbox" />)

    userEvent.tab()

    expect(document.body).not.toHaveFocus()
    expect(screen.getByRole('checkbox')).toHaveFocus()
  })
})
