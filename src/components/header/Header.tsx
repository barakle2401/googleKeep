import styled from 'styled-components';

import firebaseLogo from '@/assets/images/firebase-logo.png';
import keepLogo from '@/assets/images/keep-logo.png';
import reactLogo from '@/assets/images/react-logo.png';

const Wrapper = styled.div`
  padding: 4em;
  .logos {
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 30px;
    .logo {
      width: 50px;
    }
    .plus {
      font-weight: bold;
      margin: 0 10px;
    }
    .keep {
      margin: 0 10px;
    }
    .react {
      width: 40px;
    }
    .firebase {
      margin: 0 8px;
    }
  }
`;
function Header() {
  return (
    <Wrapper>
      <div className="logos">
        <span className="logo keep">
          <img src={keepLogo} alt="Google Keep" />
        </span>
        <span className="plus">+</span>
        <span className="logo react">
          <img src={reactLogo} alt="React" />
        </span>
        <span className="plus">+</span>
        <span className="logo firebase">
          <img src={firebaseLogo} alt="Firebase" />
        </span>
      </div>
    </Wrapper>
  );
}

export default Header;
