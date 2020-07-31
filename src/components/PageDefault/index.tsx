import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import CadastroVideo from '../../pages/cadastro/Video';
import Menu from '../Menu';
import Footer from '../Footer';

const PageDefault: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cadastro/video" component={CadastroVideo} />
          <Route component={() => <div>Página 404</div>} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default PageDefault;
