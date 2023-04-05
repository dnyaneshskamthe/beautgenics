import React, { useState, useEffect } from 'react';
import Welcome from '../login/Welcome';

const Splash = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <img src="logo.svg" alt="Logo" />
      </div>
    );
  }

  return <Welcome />;
};

export default Splash;
