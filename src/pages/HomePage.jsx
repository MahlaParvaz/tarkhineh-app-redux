// import NavBar from '../ui/NavBar';
import Banner from '../ui/Banner';
import HomePageMenu from '../ui/HomePageMenu';
import Introduction from '../ui/Introduction';
import Branches from '../ui/Branches';

function HomePage() {
  console.log('HomePage component rendered');
  return (
    <>
      {/* <NavBar /> */}
      <Banner />
      <HomePageMenu />
      <Introduction />
      <Branches />
    </>
  );
}

export default HomePage;
