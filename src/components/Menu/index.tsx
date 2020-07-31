import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';

const Menu: React.FC = () => {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="CodeFlix Logo" />
      </Link>

      {/* as Adiciona comportamento de uma outra tag à tag que possuímos, no caso um button
          que se comporta como um a, isso não é exclusivo do styled-components */}
      <Button className="ButtonLink" to="/cadastro/video">Novo vídeo</Button>
    </nav>
  );
};

export default Menu;
