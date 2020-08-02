import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cadastro/video" component={CadastroVideo} />
      <Route component={() => <div>Página 404</div>} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
