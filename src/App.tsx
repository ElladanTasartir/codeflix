import React from 'react';
import { Menu } from './components';
import BannerMain from './components/BannerMain';
import dadosIniciais from './data/dados_iniciais.json';

const App: React.FC = () => {
  return (
    <div>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end?"}
        />
    </div>
  );
};

export default App;
