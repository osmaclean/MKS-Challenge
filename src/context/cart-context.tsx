import {
  addProduct,
  removeProduct,
  updateProductQuantity,
} from '@/reducers/actions'
import { productReducer, Product } from '@/reducers/reducer'

import { createContext, ReactNode, useReducer } from 'react'

export interface CartContextData {
  products: Product[]
  totalItems: number
  totalAmountToPay: number
  addProductToCart: (products: Product) => void
  updateQuantity?: (productId: number) => void
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

  function updateQuantity(productId: number) {
    dispatch(updateProductQuantity(productId))
  }

  function addProductToCart(product: Product) {
    console.log('Adicionando produto')
    console.log('info produto: ', product)
    if (productsState.products.find((item) => item.id === product.id)) {
      updateQuantity(product.id)
    } else {
      dispatch(addProduct(product))
    }
  }

  function removeProductFromCart(productId: number) {
    console.log('Removendo')
    dispatch(removeProduct(productId))
  }

  console.log(products)

  const totalItems = products?.reduce(
    (acc, product) => acc + product.quantity,
    0,
  )

  const totalAmountToPay = products
    ?.map((product) => {
      const productPrice = Number(
        product.price.substring(3, product.price.length).replace(',', '.'),
      )
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
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
