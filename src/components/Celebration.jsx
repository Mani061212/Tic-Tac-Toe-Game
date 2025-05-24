import React from 'react';
import { FaStar } from 'react-icons/fa';

const Celebration = () => {
  return (
    <div className="flex justify-center items-center text-yellow-500 text-2xl my-4">
      <FaStar />
      <FaStar className="animate-bounce mx-2" />
      <FaStar />
    </div>
  );
};

export default Celebration;