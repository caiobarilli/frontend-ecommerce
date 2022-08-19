import { renderHook } from '@testing-library/react-hooks'
import { setStorageItem } from 'utils/localStorage'
import { useCart, CartProvider, CartProviderProps } from '.'

describe('useCart', () => {
  it('should render data from cart', () => {
    const wrapper = ({ children }: CartProviderProps) => {
      return <CartProvider>{children}</CartProvider>
    }
    setStorageItem('cartItems', ['1', '2'])
    const { result } = renderHook(() => useCart(), { wrapper })
    expect(result.current.items).toStrictEqual(['1', '2'])
  })
})
