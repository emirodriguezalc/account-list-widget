import React from 'react';
import { motion } from 'framer-motion';
import loading from '../../assets/loading.png';

const Spinner = () => {
  const spinTransition = {
    loop: Infinity,
    duration: 0.5,
  }
  return (
    <div className="spinner-container" style={{display:'flex'}}>
      <motion.img
        src={loading}
        animate={{ rotate: 360 }}
        transition={spinTransition}
        style={{width:"7vw"}}
        />
  </div>
)};

export default Spinner;
