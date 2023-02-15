import styled from 'styled-components';

const CardStyle = styled.div`
  height: 95px;
  width: 380px;
  padding: 10px;
  background: var(--Background-Cards);
  display: flex;
  align-items: center;
  
  font-family: var(--fontDefault-2);
  color: var(--fontColor-2);
  figure {
    height: 57px;
    width: 46px;
    img{
      height: 100%;
      width: 100%;
    }
  }
  h4{
    width: 100px;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
   
  }
  .CardItemName{
    min-height: 50px;
    max-width: 80px;
    padding: 0;
    display: flex;
    align-items: center;
    .CardItemQTD{
      position: relative;
      top: -20px;
      font-style: normal;
      font-weight: 500;
      font-size: 8px;
      line-height: 6px;
      color: var(--fontColor-2);
    }
    .CardItemAmount{
      padding: 0;
      display: flex;
      justify-content: center;
      span:nth-child(1){
        font-size: 16px;
        padding: 5px;
        border-radius: 8px 0px 0px 8px;
        border-style: solid none solid solid;
        border-color: var(--BorderColor);
        cursor: pointer;
      }
      span:nth-child(2){
        font-size: 12px;
        padding: 5px;
        border-style: solid none solid solid;
        border-color: var(--BorderColor);
      }
      span:nth-child(3){
        font-size: 14px;
        padding: 5px;
        border-radius: 0px 8px 8px 0px;
        border-style: solid solid solid solid;
        border-color: var(--BorderColor);
        cursor: pointer;
      }
    }
  }
  h3{
    font-family: var(--fontDefault-2);
    font-style: normal;
    font-weight: var(--fontWeight-Strong);
    font-size: 14px;
    line-height: 17px;
  }
  svg{
    position: relative;
    top: -50px;
    right: -45px;
  }
  @media (min-width: 441px){
     h4{
     }
     div{
      span{
      }
      .CardItemAmount{
        margin-left: -60px;
      }
     }
    }
  @media (max-width: 440px){
     h4{
      display: none;
     }
     div{
      span{
        display: none;
      }
      .CardItemAmount{
        margin-left: 0 auto;
        span{
          display: block;
          padding: 0px;
          background-color: beige;
        }
      }
     }
     h3{
      font-size: 12px;
     }
    }
  @media (max-width: 375px){
    h4{
      display: none;
     }
     div{
      span{
        display: none;
      }
      .CardItemAmount{
        margin-left: 0 auto;
        span{
          display: block;
        }
      }
     }
     h3{
      font-size: 12px;
     }
     svg{
      min-width: 10px;
      top: -35px;
      right: -20px;
     }
    }
`;

export default CardStyle;