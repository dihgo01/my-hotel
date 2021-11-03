import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Roboto:wght@400;500;700&display=swap');

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, Arial, Helvetica, sans-serif ;
}

  a {
    color: inherit;
    text-decoration: none;
  }

  *{
    box-sizing: border-box;
  }

`;

