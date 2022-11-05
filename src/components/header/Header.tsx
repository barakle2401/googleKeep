import styled from 'styled-components';

import firebaseLogo from '@/assets/images/firebase-logo.png';
import keepLogo from '@/assets/images/keep-logo.png';
import reactLogo from '@/assets/images/react-logo.png';
import { motion } from 'framer-motion';
const Wrapper = styled.div`
  margin-top: 1rem;
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
      width: 35px;
    }
  }
`;
function Header() {
  return (
    <Wrapper>
      <div className="logos">
        <motion.span
          transition={{ delay: 0.6, duration: 2 }}
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          className="logo keep"
        >
          <img src={keepLogo} alt="Google Keep" />
        </motion.span>
        <motion.span
          transition={{ delay: 3, duration: 0.5 }}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="plus"
        >
          +
        </motion.span>
        <motion.span
          transition={{ delay: 0.7, duration: 2 }}
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          className="logo react"
        >
          <img src={reactLogo} alt="React" />
        </motion.span>
        <motion.span
          transition={{ delay: 3, duration: 0.5 }}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="plus"
        >
          +
        </motion.span>
        <motion.span
          transition={{ delay: 0.8, duration: 2 }}
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          className="logo firebase"
        >
          <img src={firebaseLogo} alt="Firebase" />
        </motion.span>
      </div>
    </Wrapper>
  );
}

export default Header;
