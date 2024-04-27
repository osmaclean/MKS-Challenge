import { ActionTypes } from './actions'

export interface Product {
  id: number
  name: string
  description: string
  photo: string
  price: string
  quantity: number
}

export interface ProductState {
  products: Product[]
}

export function productReducer(state: ProductState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      }

    case ActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products.filter((product) => product.id !== action.payload),
        ],
      }

    case ActionTypes.INCREASE_QUANTITY:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? {
                ...product,
                quantity: product.quantity + 1,
              }
            : product,
        ),
      }

    case ActionTypes.DECREASE_QUANTITY:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? {
                ...product,
                quantity: product.quantity === 0 ? 0 : product.quantity - 1,
              }
            : product,
        ),
      }

    default:
      return state
  }
}
