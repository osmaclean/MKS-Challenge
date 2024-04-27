'use client'
import Image from 'next/image'
import { Cart } from '@/components/molecules/Cart/Cart'
import { Footer } from '@/components/organism/Footer/Footer'
import { Header } from '@/components/organism/Header/Header'
import { GlobalStyle } from '@/styles/global'
import { defaultTheme } from '@/styles/themes/default'
import { ThemeProvider } from 'styled-components'
import { MainContentContainer } from './style'
import { useContext, useState } from 'react'
import { fetchProducts } from '@/api/productService'
import { useQuery } from '@tanstack/react-query'
import { Product } from '@/reducers/reducer'
import { CartContext } from '@/context/cart-context'

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false)
  const { addProductToCart } = useContext(CartContext)

  const { data, isError, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  })

  if (isLoading) return <h1>Está carregando...</h1>
  if (isError) return <h1>Ocorreu um erro na requisição!</h1>

  const handleOpenAndCloseCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header handleOpenAndCloseCart={handleOpenAndCloseCart} />
      <MainContentContainer>
        <section className="productContainer">
          {data.products?.map((product: Product) => (
            <section key={product.name} className="productContainer__boxCard">
              <Image
                alt=""
                src={product.photo || '/logo.png'}
                aria-label=""
                width={111}
                height={138}
              ></Image>
              <div className="productInfoContainer">
                <section className="productInfoContainer__boxInfo">
                  <h1 className="productInfoContainer__boxInfo--productTitle">
                    {product.name}
                  </h1>
                  <p className="productInfoContainer__boxInfo--productPrice">
                    R${parseInt(product.price)}
                  </p>
                </section>
                <span className="productInfoContainer__descriptionInfo">
                  {product.description}
                </span>
              </div>
              <button
                onClick={() => addProductToCart({ ...product, quantity: 1 })}
                className="productContainer__boxCard--addToCartButton"
              >
                <Image
                  alt="Bag icon"
                  src="/buy.png"
                  aria-label="Add to cart button"
                  width={24}
                  height={24}
                  className="addToCartButton__buyImage"
                ></Image>
                Comprar
              </button>
            </section>
          ))}
        </section>
      </MainContentContainer>
      {isCartOpen && <Cart handleOpenAndCloseCart={handleOpenAndCloseCart} />}
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  )
}
