import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';

const PageDefault: React.FC = ({ children }) => {
  return (
    <>
      <Menu />
      {children}
      <Footer />
    </>
  );
};

export default PageDefault;
