import React from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import dadosIniciais from '../../data/dados_iniciais.json';

const Home: React.FC = () => {
  return (
    <div style={{ background: '#141414' }}>
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={
          'O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!'
        }
      />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

      {dadosIniciais.categorias.map((categoria, index) => {
        if (index === 0) return null;
        return <Carousel category={categoria} />;
      })}
    </div>
  );
};

export default Home;
