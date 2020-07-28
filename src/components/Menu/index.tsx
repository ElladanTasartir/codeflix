import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';

const Menu: React.FC = () => {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="CodeFlix Logo" />
      </a>

      {/* as Adiciona comportamento de uma outra tag à tag que possuímos, no caso um button
          que se comporta como um a, isso não é exclusivo do styled-components */}
      <Button as="a" className="ButtonLink" href="/">Novo vídeo</Button>
    </nav>
  );
};

export default Menu;
