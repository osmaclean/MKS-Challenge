import React from 'react'
import { HeaderContainer } from './style'
import Image from 'next/image'

export const Header = () => {
  return (
    <HeaderContainer>
      <Image
        alt="Image written MKS Sistemas"
        aria-label="Image written MKS Sistemas"
        src="/logo.png"
        width={189}
        height={40}
      ></Image>
      <nav>
        <ul>
          <li>
            <Image
              alt="Image of a shopping cart"
              src="/cart.png"
              aria-label="Button to view cart"
              height={18}
              width={19}
            />
            0
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  )
}
