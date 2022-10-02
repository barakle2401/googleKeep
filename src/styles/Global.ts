import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html, body {
    height: 100%;
  }

  body {
    background-color: rgba(141, 141, 141, 0.15);
    text-align: center;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    max-width: 100%;
    vertical-align: middle;
  }

  //Container
  .container {
    padding: 1rem;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  }

  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }

  @media (min-width: 1500px) {
    .container {
      width: 1200px;
    }
  } 
  .h-100{
    height: 100%;
  }
  //flex-box
  .d-flex{
    display: flex;
  }
  .align-items-center{
    align-items: center;
  }
  .justify-center{
    justify-content: center;
  }
  .flex-column{
    flex-direction: column;
  }
  //margin, padding
  .mb-1 {
    margin-bottom: 0.25rem;
  }

  .mb-2 {
    margin-bottom: 0.5rem;
  }

  //INPUT
  input, textarea {
    padding: 12px 20px;
    font-size: 1rem;
    border-width: 5px;
    border-style: solid;
    border-color: #fff;
    border-radius: 6px;
    outline: transparent;
    width: 100%;
    text-align: left;
  }

  //NOTES
  .notes {
    display: grid;
    grid-gap: 20px;
    margin-top: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    position: relative;
    align-content: space-around;
  }

  .note {
    position: relative;
  }

  .note svg {
    position: absolute;
    top: 10px;
    right: 10px;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
  }

  .note:hover {
    box-shadow: 2px 6px 10px 4px rgb(211 200 200 / 47%);
  }

  .create-note {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background-color: palegoldenrod;
    box-shadow: 2px 6px 10px 4px rgb(211 200 200 / 47%);
  }

  //BACKDROP
  .back-drop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffffbf;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  //MODAL
  .modal {
    width: clamp(50%, 700px, 90%);
    height: min(50%, 300px);
    margin: auto;
    padding: 0 2rem;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(213, 210, 210);
    color: white;
    z-index: 2;
    border: 3px solid #ffbf62;
    box-shadow: 2px 6px 10px 4px rgb(211 200 200 / 47%);
  }

  //buttons
  .btn {
    padding: 5px 10px;
    border-radius: 10px;
    color: gray;
    background-color: white;
    border: 1px solid gray;
    font-size: 1rem;
  }
`;
export default GlobalStyles;
