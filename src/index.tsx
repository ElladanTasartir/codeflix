import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import CadastroVideo from './pages/cadastro/Video';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/cadastro/video" component={CadastroVideo} />
      <Route component={() => <div>Página 404</div>} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
