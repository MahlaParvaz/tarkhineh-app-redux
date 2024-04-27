import React from 'react';
import NavBar from '../ui/NavBar';
import Banner from '../ui/Banner';
import HomePageMenu from '../ui/HomePageMenu';

function HomePage() {
  return (
    <div>
      <NavBar />
      <Banner />
      <HomePageMenu/>
    </div>
  );
}

export default HomePage;
