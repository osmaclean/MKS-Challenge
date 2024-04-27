import {
  addProduct,
  removeProduct,
  increaseProductQuantity,
  decreaseProductQuantity,
} from '@/reducers/actions'
import { productReducer, Product } from '@/reducers/reducer'

import { createContext, ReactNode, useReducer } from 'react'

export interface CartContextData {
  products: Product[]
  totalItems: number
  totalAmountToPay: number
  addProductToCart: (product: Product) => void
  increaseQuantity: (productId: number) => void
  decreaseQuantity: (productId: number) => void
  removeProductFromCart: (productId: number) => void
}

export const CartContext = createContext({} as CartContextData)

interface CartContextProviderProps {
  children: ReactNode
}

export const CartProvider = ({ children }: CartContextProviderProps) => {
  const [productsState, dispatch] = useReducer(productReducer, {
    products: [],
  })

  const { products } = productsState

  function increaseQuantity(productId: number) {
    dispatch(increaseProductQuantity(productId))
  }

  function decreaseQuantity(productId: number) {
    dispatch(decreaseProductQuantity(productId))
  }

  function addProductToCart(product: Product) {
    if (productsState.products.find((item) => item.id === product.id)) {
      increaseQuantity(product.id)
    } else {
      dispatch(addProduct(product))
    }
  }

  function removeProductFromCart(productId: number) {
    dispatch(removeProduct(productId))
  }

  const totalItems = products?.reduce(
    (acc, product) => acc + product.quantity,
    0,
  )

  const totalAmountToPay = products
    ?.map((product) => {
      const productPrice = Number(product.price)
      console.log(productPrice)
      return productPrice * product.quantity
    })
    .reduce((acc, item) => acc + item, 0)

  return (
    <CartContext.Provider
      value={{
        totalItems,
        totalAmountToPay,
        addProductToCart,
        products,
        decreaseQuantity,
        increaseQuantity,
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
