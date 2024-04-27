import {
  addProduct,
  removeProduct,
  increaseProductQuantity,
  decreaseProductQuantity,
  ActionTypes,
} from './actions'
import { Product } from './reducer'

describe('actions', () => {
  describe('addProduct', () => {
    it('should create an ADD_PRODUCT action with a product payload', () => {
      const newProduct: Product = {
        id: 1,
        name: 'Produto 1',
        description: 'Descrição do produto 1',
        photo: 'imagem.jpg',
        price: '10.00',
        quantity: 1,
      }
      const expectedAction = {
        type: ActionTypes.ADD_PRODUCT,
        payload: newProduct,
      }
      expect(addProduct(newProduct)).toEqual(expectedAction)
    })
  })

  describe('removeProduct', () => {
    it('should create a REMOVE_PRODUCT action with a product ID payload', () => {
      const productId = 1
      const expectedAction = {
        type: ActionTypes.REMOVE_PRODUCT,
        payload: productId,
      }
      expect(removeProduct(productId)).toEqual(expectedAction)
    })
  })

  describe('increaseProductQuantity', () => {
    it('should create an INCREASE_QUANTITY action with a product ID payload', () => {
      const productId = 1
      const expectedAction = {
        type: ActionTypes.INCREASE_QUANTITY,
        payload: productId,
      }
      expect(increaseProductQuantity(productId)).toEqual(expectedAction)
    })
  })

  describe('decreaseProductQuantity', () => {
    it('should create a DECREASE_QUANTITY action with a product ID payload', () => {
      const productId = 1
      const expectedAction = {
        type: ActionTypes.DECREASE_QUANTITY,
        payload: productId,
      }
      expect(decreaseProductQuantity(productId)).toEqual(expectedAction)
    })
  })
})
