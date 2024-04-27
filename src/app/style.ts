import styled from 'styled-components'

export const MainContentContainer = styled.main`
  width: 100%;
  padding: 40px 64px 72px 64px;
  display: flex;
  align-items: center;
  justify-content: center;

  .productContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;

    .productContainer__boxCard {
      border-radius: 12px;
      background-color: ${(props) => props.theme.white};
      box-shadow: 0 2px 8px 0px ${(props) => props.theme['boxShadow-600']};
      padding: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 14px;
      width: 217px;
      position: relative;
      height: 320px;

      .productInfoContainer {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        gap: 8px;

        .productInfoContainer__boxInfo {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          user-select: none;

          .productInfoContainer__boxInfo--productTitle {
            font-weight: 400;
          }

          .productInfoContainer__boxInfo--productPrice {
            font-size: 16px;
            background-color: ${(props) => props.theme['black-600']};
            padding: 4px 8px;
            border-radius: 4px;
            font-weight: 600;
            color: ${(props) => props.theme.white};
          }
        }

        .productInfoContainer__descriptionInfo {
          font-weight: 300;
          font-size: 12px;
          user-select: none;
          margin-bottom: 32px;
        }
      }

      .productContainer__boxCard--addToCartButton {
        background-color: ${(props) => props.theme['blue-400']};
        border: 2px solid ${(props) => props.theme['blue-400']};
        color: ${(props) => props.theme.white};
        padding: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 14px;
        width: 100%;
        cursor: pointer;
        position: absolute;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 14px;
        bottom: 0;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        transition: 300ms ease-in-out;

        .addToCartButton__buyImage {
          width: 13px;
          height: 14px;
        }
      }
      .productContainer__boxCard--addToCartButton:hover {
        opacity: 0.85;
      }
    }
  }
`
