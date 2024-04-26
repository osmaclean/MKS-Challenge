import { Product } from './reducer'

export enum ActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  UPDATE_QUANTITY = 'UPDATE_QUANTITY',
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

export function updateProductQuantity(productId: number) {
  return {
    type: ActionTypes.UPDATE_QUANTITY,
    payload: productId,
  }
}
