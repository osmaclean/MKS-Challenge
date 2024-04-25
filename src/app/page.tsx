'use client'
import { GlobalStyle } from '@/styles/global'
import { defaultTheme } from '@/styles/themes/default'
import { ThemeProvider } from 'styled-components'

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>Oi</div>

      <GlobalStyle />
    </ThemeProvider>
  )
}
