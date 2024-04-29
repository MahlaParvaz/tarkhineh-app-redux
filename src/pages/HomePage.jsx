import React from 'react';
import NavBar from '../ui/NavBar';
import Banner from '../ui/Banner';
import HomePageMenu from '../ui/HomePageMenu';
import Introduction from '../ui/Introduction';

function HomePage() {
  return (
    <div>
      <NavBar />
      <Banner />
      <HomePageMenu />
      <Introduction />
    </div>
  );
}

export default HomePage;
