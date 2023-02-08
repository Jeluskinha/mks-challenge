import styled from 'styled-components';

const CardsStyle = styled.div`
  transform: scale(0.95);
  height: fit-content;
  width: 218px;
  background-color: #FFFFFF;
  border-radius: 8px;
  
  display: flex;
  flex-direction: column;
  div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px 15px 0;
    gap: 1rem;
    figure{
      height: 140px;
      width: 100%;
      display: flex;
      justify-content: center;
      img{
        height: 138px;
        width: 112px;
      }
    }
    div{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0;
      h2{
        height: 30px;
        min-width: 112px;
        font-family: var(--fontDefault-2);
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        color: var(--fontColor-2);
      }
      span{
        height: fit-content;
        width: fit-content;
        padding: 5px;
        border-radius: 5px;
        background: #373737;
  
        font-family: var(--fontDefault-2);
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
      }
    }
    h6{
      height: 50px;
      font-family: var(--fontDefault-2);
      font-style: normal;
      font-weight: 300;
      font-size: 10px;
      line-height: 12px;
      color: var(--fontColor-2);
      overflow: scroll;
    }
  }
  button{
    width: 100%;
    background-color:var(--Background-Button);
    padding: 5px 0px;
    border-radius: 0 0 8px 8px;

    color: var(--fontColor-1);
  }
`;

export default CardsStyle;