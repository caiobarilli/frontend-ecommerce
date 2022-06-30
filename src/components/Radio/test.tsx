import { renderWithTheme } from 'utils/tests/helpers'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import theme from 'styles/theme'

import Radio from '.'

describe('<Radio />', () => {
  it('should render the radio', () => {
    renderWithTheme(<Radio label="Radio" />)
    expect(screen.getByText(/radio/i)).toBeInTheDocument()
    expect(screen.getByRole('radio')).toBeInTheDocument()
  })

  it('should render the radio with a white label by default', () => {
    renderWithTheme(<Radio label="Radio" id="radio" />)
    expect(screen.getByText(/radio/i)).toHaveStyle({
      color: theme.colors.white
    })
  })

  it('should render the radio with a black label', () => {
    renderWithTheme(<Radio color="black" label="Radio" id="radio" />)
    expect(screen.getByText(/radio/i)).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should dispatch onCheck function when status changes', async () => {
    const onCheck = jest.fn()

    renderWithTheme(<Radio label="Radio" id="radio" onCheck={onCheck} />)

    userEvent.click(screen.getByRole('radio'))

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
  })

  it('should be acccessible with tab', () => {
    renderWithTheme(<Radio label="Radio" id="radio" />)

    userEvent.tab()

    expect(document.body).not.toHaveFocus()
    expect(screen.getByRole('radio')).toHaveFocus()
  })
})
