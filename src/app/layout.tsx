'use client'
import { CartProvider } from '@/context/cart-context'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const queryClient = new QueryClient()
  return (
    <html lang="pt-BR">
      <head>
        <title>MKS Sistemas</title>
      </head>
      <CartProvider>
        <QueryClientProvider client={queryClient}>
          <body className={montserrat.className}>{children}</body>
        </QueryClientProvider>
      </CartProvider>
    </html>
  )
}
