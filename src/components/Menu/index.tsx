import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';

const Menu: React.FC = () => {
  return (
    <nav>
      <img className="Logo" src={Logo} alt="CodeFlix Logo" />
    </nav>
  );
};

export default Menu;
