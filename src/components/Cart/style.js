import styled from "styled-components";

const CartStyle = styled.aside`
  z-index: 999;
  height: 100vh;
  width: 465px;
  position: absolute;
  right: 0;
  background-color: var(--Background-Cart);
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  font-family: var(--fontDefault-2);
  color: var(--fontColor-1);
  div {
    padding: 20px 30px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div {
      height: fit-content;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      h2 {
        font-style: normal;
        font-weight: 700;
        font-size: 27px;
        line-height: 33px;
      }
      svg {
        align-self: center;
        height: 25px;
        width: 25px;
        color: #000000;
        border-radius: 50%;
        background-color: white;
        cursor: pointer;
      }
    }
    section {
      height: 80%;
      max-height: 420px;
      width: 100%;
      padding: 15px;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      overflow: scroll;
      overflow-x: hidden;
      &::-webkit-scrollbar {
        width: 0px;
      }

      /* Track */
      &::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: #888;
      }

      /* Handle on hover */
      &::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    }
    div:nth-last-child(1) {
      height: fit-content;
      width: 100%;
      display: flex;
      justify-content: space-between;
      h6 {
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 15px;
      }
      span {
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 15px;
      }
    }
  }
  button {
    height: 80px;
    width: 100%;
    background-color: black;

    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
    color: var(--fontColor-1);
  }
`;

export default CartStyle;
