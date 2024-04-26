'use client'
import Image from 'next/image'
import { Cart } from '@/components/molecules/Cart/Cart'
import { Footer } from '@/components/organism/Footer/Footer'
import { Header } from '@/components/organism/Header/Header'
import { GlobalStyle } from '@/styles/global'
import { defaultTheme } from '@/styles/themes/default'
import { ThemeProvider } from 'styled-components'
import { MainContentContainer } from './style'
import { useState } from 'react'
import { fetchProducts } from '@/api/productService'
import { useQuery } from '@tanstack/react-query'
import { Product } from '@/reducers/reducer'

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(true)

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
          {data.products?.map((post: Product) => (
            <section key={post.name} className="productContainer__boxCard">
              <Image
                alt=""
                src={post.photo || '/logo.png'}
                aria-label=""
                width={111}
                height={138}
              ></Image>
              <div className="productInfoContainer">
                <section className="productInfoContainer__boxInfo">
                  <h1 className="productInfoContainer__boxInfo--productTitle">
                    {post.name}
                  </h1>
                  <p className="productInfoContainer__boxInfo--productPrice">
                    R${parseInt(post.price)}
                  </p>
                </section>
                <span className="productInfoContainer__descriptionInfo">
                  {post.description}
                </span>
              </div>
              <button className="productContainer__boxCard--addToCartButton">
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
      <Cart handleOpenAndCloseCart={handleOpenAndCloseCart} />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  )
}
