import NavBar from './NavBar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
