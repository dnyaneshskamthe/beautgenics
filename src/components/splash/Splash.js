import React, { useState, useEffect } from 'react';
import Welcome from '../login/Welcome';
import SignIn from '../login/SignIn';
import Header from '../header/Header';
import Home from '../home/Home';

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

  // return <Welcome />;
  // return <SignIn/>
  return <Home/>
};

export default Splash;
