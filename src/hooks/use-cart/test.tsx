import { renderHook, waitFor } from '@testing-library/react'

import { MockedProvider } from '@apollo/client/testing'
import { setStorageItem } from 'utils/localStorage'
import { useCart, CartProvider, CartProviderProps } from '.'
import { cartItems, gamesMock } from './mock'

describe('useCart', () => {
  it('should render data from cart', async () => {
    const wrapper = ({ children }: CartProviderProps) => {
      return (
        <MockedProvider mocks={[gamesMock]}>
          <CartProvider>{children}</CartProvider>
        </MockedProvider>
      )
    }
    setStorageItem('cartItems', ['1', '2'])

    const { result } = renderHook(() => useCart(), {
      wrapper
    })

    waitFor(() => {
      expect(result.current.items).toStrictEqual([cartItems])
    })
  })
})
