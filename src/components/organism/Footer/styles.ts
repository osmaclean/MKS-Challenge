import styled from 'styled-components'

export const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${(props) => props.theme['white-200']};
  span {
    font-size: 12px;
    font-weight: 400;
  }
`
