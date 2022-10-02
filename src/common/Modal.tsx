import { motion } from 'framer-motion';

import Backdrop from '@/common/Backdrop';

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 100,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

const Modal = ({ children, handleClose }: { children: any; handleClose: () => {} }) => {
  return (
    <Backdrop key="backDrop" onClick={handleClose}>
      <motion.div
        variants={dropIn}
        exit="exit"
        initial="hidden"
        className="modal"
        animate="visible"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
