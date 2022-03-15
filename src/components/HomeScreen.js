import React from 'react';

import Nav from './Nav';
import Banner from './Banner';
import './HomeScreen.css';

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      {/* Navbar */}
      <Nav />
      {/* Banner */}
      <Banner />
      {/* Row */}
    </div>
  );
};

export default HomeScreen;
