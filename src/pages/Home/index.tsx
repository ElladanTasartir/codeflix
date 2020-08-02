import React from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import dadosIniciais from '../../data/dados_iniciais.json';
import PageDefault from '../../components/PageDefault';

const Home: React.FC = () => {
  return (
    <PageDefault>
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
          return <Carousel key={categoria.titulo} category={categoria} />;
        })}
      </div>
    </PageDefault>
  );
};

export default Home;
