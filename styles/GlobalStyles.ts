import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0px;
    padding: 0px;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    --white: #ffffff;
    --orange: #f25d27
    --background: #E5E5E5;
    --background-button-header: #dde9f0;
    --color-button-header: #115d8c;
    --color-headings: #123952;
    --color-text: #617480;
    --color-strong : #123952

  };

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    font-family: "Barlow", "Heebo", sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
`;
