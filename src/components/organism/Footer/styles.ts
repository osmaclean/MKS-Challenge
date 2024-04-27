import styled from 'styled-components'

export const FooterContainer = styled.footer`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  user-select: none;
  background-color: ${(props) => props.theme['white-200']};
  position: absolute;
  bottom: 0;
  span {
    font-size: 12px;
    font-weight: 400;
  }
`
