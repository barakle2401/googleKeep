import { motion } from 'framer-motion';

const Backdrop = ({ children, onClick }: { children: any; onClick: () => {} }) => {
  return (
    <motion.div
      className="back-drop"
      onClick={onClick}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
