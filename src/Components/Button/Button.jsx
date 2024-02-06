
import { motion } from 'framer-motion';

const Button = () => {
  const buttonVariants = {
    rest: {
      scale: 1,
      background: 'linear-gradient(to right, #4CAF50, #45a049)', // Green gradient
      border: '2px solid #4CAF50',
      color: 'white',
      transition: {
        duration: 0.3,
      },
    },
    hover: {
      scale: 1.1,
      background: 'linear-gradient(to right, #4CAF50, #9edb95)', 
      boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
      border: '2px solid #3d8e3a',
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.9,
      background: 'linear-gradient(to right, #45a049, #3d8e3a)', // Change gradient shade on tap
      border: '2px solid #3d8e3a',
      boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.button
      variants={buttonVariants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      style={{
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        outline: 'none',
      }}
    >
      Click me!
    </motion.button>
  );
};

export default Button;
