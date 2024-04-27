'use client'
import React, { useContext } from 'react'
import { CartContainer } from './styles'
import { OpenAndCloseCartProps } from '@/@types'
import Image from 'next/image'
import { CartContext } from '@/context/cart-context'

export const Cart = ({ handleOpenAndCloseCart }: OpenAndCloseCartProps) => {
  const { products, increaseQuantity, decreaseQuantity, totalAmountToPay } =
    useContext(CartContext)

  const handleIncreaseQuantity = (id: number) => {
    const filteredProduct = products.find((product) => product.id === id)
    if (filteredProduct) {
      increaseQuantity(filteredProduct.id)
    }
  }

  const handleDecreaseQuantity = (id: number) => {
    const filteredProduct = products.find((product) => product.id === id)
    if (filteredProduct) {
      decreaseQuantity(filteredProduct.id)
    }
  }

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
        <section className="insideCartContainer__CartBoxFooter">
          {products.map((product) => (
            <div
              key={product.name}
              className="insideCartContainer__CartBoxFooter--cartCard"
            >
              <Image
                src={product.photo}
                alt=""
                width={111}
                height={138}
              ></Image>
              <h3>{product.name}</h3>
              <div className="quantityBox">
                <p className="quantityBox__title">Qtd:</p>
                <div className="quantityBox__quantityControlBox">
                  <button onClick={() => handleDecreaseQuantity(product.id)}>
                    -
                  </button>
                  <div className="quantityBox__quantityControlBox--divisor"></div>
                  <span>{product.quantity}</span>
                  <div className="quantityBox__quantityControlBox--divisor"></div>
                  <button onClick={() => handleIncreaseQuantity(product.id)}>
                    +
                  </button>
                </div>
              </div>
              <p className="cartCard__price">
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                  currency: 'BRL',
                }).format(parseInt(product.price))}
              </p>
              <button className="cartCard__removeButton">X</button>
            </div>
          ))}
        </section>
        <div className="totalAmount">
          <h2 className="totalAmount__title">Total:</h2>
          <h2 className="totalAmount__value">
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              maximumFractionDigits: 2,
              currency: 'BRL',
            }).format(totalAmountToPay)}
          </h2>
        </div>
      </section>
      <button className="footerButton">Finalizar Compra</button>
    </CartContainer>
  )
}
