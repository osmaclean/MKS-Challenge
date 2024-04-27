import { ActionTypes } from './actions'
import { productReducer, ProductState } from './reducer'

const initialState: ProductState = {
  products: [],
}

describe('productReducer', () => {
  it('should return the initial state', () => {
    const action = {}
    const newState = productReducer(initialState, action)
    expect(newState).toEqual(initialState)
  })

  it('should add a product', () => {
    const newProduct = {
      id: 1,
      name: 'Produto 1',
      description: 'Descrição do produto 1',
      photo: 'imagem.jpg',
      price: '10.00',
      quantity: 1,
    }
    const action = { type: ActionTypes.ADD_PRODUCT, payload: newProduct }
    const newState = productReducer(initialState, action)
    expect(newState.products).toEqual([newProduct])
  })

  it('should remove a product', () => {
    const initialProducts = [
      {
        id: 1,
        name: 'Produto 1',
        description: 'Descrição do produto 1',
        photo: 'imagem.jpg',
        price: '10.00',
        quantity: 1,
      },
      {
        id: 2,
        name: 'Produto 2',
        description: 'Descrição do produto 2',
        photo: 'imagem.jpg',
        price: '199.00',
        quantity: 5,
      },
    ]
    const productToRemoveId = 1
    const action = {
      type: ActionTypes.REMOVE_PRODUCT,
      payload: productToRemoveId,
    }
    const newState = productReducer({ products: initialProducts }, action)
    expect(newState.products).toEqual([
      {
        id: 2,
        name: 'Produto 2',
        description: 'Descrição do produto 2',
        photo: 'imagem.jpg',
        price: '199.00',
        quantity: 5,
      },
    ])
  })

  it('should increase product quantity', () => {
    const initialProducts = [
      {
        id: 1,
        name: 'Produto 1',
        description: 'Descrição do produto 1',
        photo: 'imagem.jpg',
        price: '10.00',
        quantity: 1,
      },
      {
        id: 2,
        name: 'Produto 2',
        description: 'Descrição do produto 2',
        photo: 'imagem.jpg',
        price: '199.00',
        quantity: 5,
      },
    ]
    const productIdToIncrease = 1
    const action = {
      type: ActionTypes.INCREASE_QUANTITY,
      payload: productIdToIncrease,
    }
    const newState = productReducer({ products: initialProducts }, action)
    expect(newState.products).toEqual([
      {
        id: 1,
        name: 'Produto 1',
        description: 'Descrição do produto 1',
        photo: 'imagem.jpg',
        price: '10.00',
        quantity: 2,
      },
      {
        id: 2,
        name: 'Produto 2',
        description: 'Descrição do produto 2',
        photo: 'imagem.jpg',
        price: '199.00',
        quantity: 5,
      },
    ])
  })

  it('should not decrease product quantity below zero', () => {
    const initialProducts = [
      {
        id: 1,
        name: 'Produto 1',
        description: 'Descrição do produto 1',
        photo: 'imagem.jpg',
        price: '10.00',
        quantity: 2,
      },
      {
        id: 2,
        name: 'Produto 2',
        description: 'Descrição do produto 2',
        photo: 'imagem.jpg',
        price: '199.00',
        quantity: 5,
      },
    ]
    const productIdToDecrease = 1
    const action = {
      type: ActionTypes.DECREASE_QUANTITY,
      payload: productIdToDecrease,
    }
    const newState = productReducer({ products: initialProducts }, action)
    expect(newState.products).toEqual([
      {
        id: 1,
        name: 'Produto 1',
        description: 'Descrição do produto 1',
        photo: 'imagem.jpg',
        price: '10.00',
        quantity: 1,
      },
      {
        id: 2,
        name: 'Produto 2',
        description: 'Descrição do produto 2',
        photo: 'imagem.jpg',
        price: '199.00',
        quantity: 5,
      },
    ])
  })

  it('should handle unknown action types', () => {
    const unknownAction = { type: 'UNKNOWN_ACTION' }
    const newState = productReducer(initialState, unknownAction)
    expect(newState).toEqual(initialState)
  })
})
