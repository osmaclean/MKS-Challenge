'use client'
import { Footer } from '@/components/organism/Footer/Footer'
import { Header } from '@/components/organism/Header/Header'
import { GlobalStyle } from '@/styles/global'
import { defaultTheme } from '@/styles/themes/default'
import { ThemeProvider } from 'styled-components'

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <div>Oi</div>
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  )
}
