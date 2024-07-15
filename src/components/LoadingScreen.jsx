import React from 'react';
import loadingImage from '../assets/images/loading.png'; // Update with your loading image path

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#a7a7c5] z-50">
      <img src={loadingImage} alt="Loading" className="w-16 h-16 animate-spin" />
    </div>
  );
};

export default LoadingScreen;
