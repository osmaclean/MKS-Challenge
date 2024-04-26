import styled from 'styled-components'

export const CartContainer = styled.section`
  width: 27rem;
  height: 100%;
  background-color: ${(props) => props.theme['blue-400']};
  box-shadow: 0 2px 16px 0px ${(props) => props.theme['boxShadow-600']};
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .insideCartContainer {
    padding: 32px;
    width: 100%;
    .insideCartContainer__CartBoxHeader {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;

      .insideCartContainer__CartBoxHeader--title {
        color: ${(props) => props.theme.white};
      }

      .insideCartContainer__CartBoxHeader--button {
        cursor: pointer;
        padding: 4px;
        border-radius: 100%;
        width: 32px;
        height: 32px;
        border: 2px solid ${(props) => props.theme['black-700']};
        background-color: ${(props) => props.theme['black-700']};
        color: ${(props) => props.theme.white};
        font-size: 14px;
        transition: 300ms ease-in-out;
      }

      .CartBoxHeader__button:hover {
        transform: scale(1.05);
      }
    }
  }

  .footerButton {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: ${(props) => props.theme['black-700']};
    border: 2px solid ${(props) => props.theme['black-700']};
    color: ${(props) => props.theme.white};
    height: 80px;
    font-weight: bold;
    font-size: 24px;
    transition: 300ms ease-in-out;
  }

  .footerButton:hover {
    /* opacity: 0.7; */
    transform: scale(0.9);
  }
`
