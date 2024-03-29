import { CartContextDefaultValues } from 'hooks/use-cart'
import { render, screen } from 'utils/test-utils'

import CartIcon from '.'

describe('<CartIcon />', () => {
  it('should render with badge', () => {
    render(<CartIcon />, {
      cartProviderProps: { ...CartContextDefaultValues, quantity: 3 }
    })

    expect(screen.getByLabelText(/cart items/i)).toBeInTheDocument()
    expect(screen.getByText(/3/)).toBeInTheDocument()
  })
})
