import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

const CadastroVideo: React.FC = () => {
  return (
    <PageDefault>
      Página de Cadastro de Vídeo
      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
};

export default CadastroVideo;
