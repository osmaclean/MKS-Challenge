import { Product } from './reducer'

export enum ActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  INCREASE_QUANTITY = 'INCREASE_QUANTITY',
  DECREASE_QUANTITY = 'DECREASE_QUANTITY',
}

export function addProduct(product: Product) {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: product,
  }
}

export function removeProduct(productId: number) {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: productId,
  }
}

export function increaseProductQuantity(productId: number) {
  return {
    type: ActionTypes.INCREASE_QUANTITY,
    payload: productId,
  }
}

export function decreaseProductQuantity(productId: number) {
  return {
    type: ActionTypes.DECREASE_QUANTITY,
    payload: productId,
  }
}
