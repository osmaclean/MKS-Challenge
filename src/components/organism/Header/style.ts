import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  padding: 0px 56px;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme['blue-400']};
  width: 100%;

  ul {
    padding: 1rem;
    list-style: none;
    li {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      background-color: ${(props) => props.theme.white};
      padding: 8px;
      border: 2px solid ${(props) => props.theme.white};
      border-radius: 8px;
      font-weight: 800;
      img {
        width: 16px;
        height: 16px;
      }
    }
  }
`
