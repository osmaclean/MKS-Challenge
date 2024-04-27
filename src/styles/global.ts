import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0 ;
    box-sizing: border-box;
  }

  body {
    color: ${(props) => props.theme['black-600']};
    background-color: ${(props) => props.theme.white};
    -webkit-font-smoothing: antialiased;
    position: relative;
    user-select: none;
  }

  body::-webkit-scrollbar {
    background-color: ${(props) => props.theme['white-200']};
    color: ${(props) => props.theme['blue-200']};
    padding: 2px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme['blue-200']};
    border-radius: 8px;
  }

  body, input, textarea, button {
    font-weight: 400;
    font-size: 1rem;
  }
`
