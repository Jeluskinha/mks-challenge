import { createGlobalStyle } from "styled-components";

const GlobalStyle  = createGlobalStyle`
    :root {
    --Color-primary:#FF577F;
    --Color-primary-Focus: #FF427F;
    --Color-primary-Negative: #59323F;
    --White: #FFFFFF;
    --Summer--1: rgba(44, 58, 64, 1); //2c3a40
    --Summer--2: rgba(65, 85, 86, 1); //3f5559
    --Summer--3: rgba(97, 136, 140, 1); //61888C
    --Summer--4: rgba(159, 188, 191, 1); //9FBCBF
    --Summer--5: rgba(20, 38, 17, 1); //142611
    --Blue-1: rgb(25, 175, 230);
    --Purple: rebeccapurple;
    --Grey-4: #121214;
    --Grey-3: #212529;
    --Grey-2: #343B41;
    --Grey-1: #868E96;
    --Grey-0: #F8F9FA;
    --GreySoft: #666666;
    --Background-darkGrey: #313131; 
    --Background-Grey: #464646; 
      --Background-Header: #0F52BA;
      --Background-Button: #0F52BA;
      --Background-Cart: #0F52BA;
      --Background-Page: #E5E5E5; 
      --Background-Cards: #FFFFFF;
      --Background-Info: #20202a;
      --Background-Main: rgba(30,30,40,255);
      --Background-React: #282c34; 
      --Underline:#383840;
    --Black: #0000000;
    --Sucess: #3FE864;
    --Negative: #E83F5B;
    --BorderColor: #BFBFBF;
    --fontColor-1: #FFFFFF; 
    --fontColor-2: #2C2C2C; 
    --fontColor-3: #ffc107;
    --Icons: #000000;
      --fontColor-React: #61dafb;
    --fontSize-Small: 1.5rem;
    --fontSize-Middle: 2.5rem;
    --fontSize-Large: 4rem;
    --fontWeight-Strong: 700;
    --fontWeight-Soft: 400;
    --fontDefault: Oswald;
    --fontDefault-2: Montserrat;

    font-size: 60%;   
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: var(--fontInter);
  }

  body,html{
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }

  body {
    background: var(--Background-Page);
    color: var(--fontColor-1);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: 'Roboto';
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--color-text-light);
    margin: 1rem;
    border-radius: 1.6rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-primary-dark);
    border-radius: 1.6rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
  }
`;

export { GlobalStyle }