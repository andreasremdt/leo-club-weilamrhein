import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --yellow: #B45309;
    --red: #DC2626;
    --gray-500: #292524;
    --gray-400: #57534E;
    --gray-300: #A8A29E;
    --gray-200: #E7E5E4;
    --gray-100: #F5F5F4;

    --font-sans: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --font-serif: Lora, ui-serif, Georgia, serif;
  }

  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }

  html {
    -webkit-text-size-adjust: 100%;
    height: 100%;
  }

  body {
    margin: unset;
    height: 100%;
    font: 400 15px/1.8 var(--font-serif);
    color: var(--gray-500);
    background-color: var(--gray-100);
  }

  img {
    max-width: 100%;
    height: auto;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 2rem;
    line-height: 1.1;
  }

  a {
    text-decoration: none;
    color: inherit;
    outline: none;
  }

  p a, td a {
    transition: border-color .1s linear;
    border-bottom: 2px solid var(--yellow);

    &:hover,
    &:focus-visible {
      border-color: var(--gray-500);
    }
  }

  table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 1rem;
    display: block;
    white-space: nowrap;
    overflow-y: auto;
  }

  th {
    text-align: left;
    border-bottom: 2px solid var(--gray-200);
    padding: .4rem 1rem;
  }

  td {
    border-top: 1px solid var(--gray-200);
    padding: .4rem 1rem;
  }

  input, textarea {
    width: 100%;
    font-family: inherit;
    outline: none;
    border-radius: 2px;
    margin: unset;
    box-sizing: border-box;
    color: var(--gray-500);
    font-size: 1em;
  }

  button {
    font: inherit;
    outline: none;
    cursor: pointer;
    box-sizing: border-box;
  }

  figure {
    margin: unset;
  }

  img {
    vertical-align: middle;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    aspect-ratio: 16/9;
  }

  mark,
  ::selection {
    background-color: var(--yellow);
    color: white;
  }
`;

export default GlobalStyle;
