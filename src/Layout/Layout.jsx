import NavBar from '../ui/NavBar';
import Footer from './Footer';

function Layout({ children }) {
    console.log('Layout component rendered');
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
