import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: rgba(141, 141, 141, 0.15);
  }

  img {
    max-width: 100%;
    vertical-align: middle;
  }

  .notes {
    padding: 20px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    position: relative;
    margin: 50px auto;
    align-content: space-around;
  }

  .note {
    position: relative;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #dadce0;
    background-color: #fff;
    min-height: 100px;
    min-width: 100px;
    margin-right: 1rem;
    text-align: left;
  }

  .note svg {
    position: absolute;
    top: 5px;
    opacity: 0;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
  }

  .note:hover {
    box-shadow: 2px 6px 10px 4px rgb(211 200 200 / 47%);
  }

`;
export default GlobalStyles;
