import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: '70vh', padding: '2rem' }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;