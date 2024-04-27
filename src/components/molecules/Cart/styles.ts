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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    flex: 1;

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

      .insideCartContainer__CartBoxHeader--button:hover {
        transform: scale(1.05);
      }
    }

    .insideCartContainer__CartBoxFooter {
      display: flex;
      flex-direction: column;
      padding: 24px 0px 0px 0px;
      align-items: flex-start;
      justify-content: flex-start;
      width: 100%;
      height: 100%;
      gap: 14px;
      flex: 1;

      .insideCartContainer__CartBoxFooter--cartCard {
        background-color: ${(props) => props.theme.white};
        border: 2px solid ${(props) => props.theme.white};
        border-radius: 12px;
        padding: 8px;
        display: grid;
        width: 95%;
        grid-template-columns: repeat(4, 1fr);
        align-items: center;
        justify-content: center;
        justify-items: center;
        grid-template-rows: 1fr;
        position: relative;

        img {
          width: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          height: auto;
        }

        h3 {
          font-weight: 400;
          font-size: 14px;
          width: 80px;
        }

        p {
          /* font-weight: 700; */
        }
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

  .quantityBox {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 2px;
    gap: 4px;

    .quantityBox__title {
      font-size: 8px;
    }

    .quantityBox__quantityControlBox {
      border: 0.3px solid ${(props) => props.theme.borderQuantity};
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 2px 4px;
      width: 100%;

      button {
        background-color: transparent;
        border: none;
        height: 12px;
        width: 12px;
        font-size: 13px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: 300ms ease-in-out;
      }

      span {
        font-size: 13px;
      }

      .quantityBox__quantityControlBox--divisor {
        background-color: ${(props) => props.theme.borderQuantity};
        width: 1px;
        height: 14px;
      }
    }
  }

  .cartCard__price {
    font-weight: 700;
  }

  .cartCard__removeButton {
    background-color: ${(props) => props.theme['black-700']};
    border: 2px solid ${(props) => props.theme['black-700']};
    padding: 4px;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    color: ${(props) => props.theme.white};
    font-size: 10px;
    font-weight: 500;
    transition: 300ms ease-in-out;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -10px;
    right: -10px;
  }

  .cartCard__removeButton:hover {
    transform: scale(1.05);
  }

  .totalAmount {
    color: ${(props) => props.theme.white};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
