import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0px;
    padding: 0px;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #E5E5E5;
    font-family: "Barlow", "Heebo", sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
`;
