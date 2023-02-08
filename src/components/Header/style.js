import styled from 'styled-components';

const HeaderStyle = styled.header`
  height: 80px;
  width: 100vw;
  padding: 0 30px;
  background-color: var(--Background-Header);
  font-family: var(--fontDefault-2);
   
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    height: 90%;
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 1rem;
    h1{
      font-style: normal;
      font-weight: 600;
      font-size: 40px;
      line-height: 19px;
      color: var(--fontColor-1);
    }
    span{
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 19px;
      color: var(--fontColor-1);
    }
  }
  div:nth-last-child(1){
    height: fit-content;
    width: fit-content;
    padding: 10px 20px;
    border-radius: 8px;
    background-color: var(--fontColor-1);
    cursor: pointer;
    
    svg{
      color: var(--Icons);
    }
    span{
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      color: var(--Icons);
    }
  }
`;

export default HeaderStyle;