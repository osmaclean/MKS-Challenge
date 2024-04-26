import React from 'react'
import { CartContainer } from './styles'
import { OpenAndCloseCartProps } from '@/@types'

export const Cart = ({ handleOpenAndCloseCart }: OpenAndCloseCartProps) => {
  return (
    <CartContainer>
      <section className="insideCartContainer">
        <section className="insideCartContainer__CartBoxHeader">
          <h2 className="insideCartContainer__CartBoxHeader--title">
            Carrinho de Compras
          </h2>
          <button
            onClick={handleOpenAndCloseCart}
            className="insideCartContainer__CartBoxHeader--button"
          >
            X
          </button>
        </section>
        <section className="CartBoxFooter">
          {/* <div>
          <p></p>
          <p></p>
        </div> */}
        </section>
      </section>
      <button className="footerButton">Finalizar Compra</button>
    </CartContainer>
  )
}
