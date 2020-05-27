import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Autores from './Autores';
import Livros from './Livros';
import Sobre from './Sobre';
import NotFound from './NotFound';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={App}/>
      <Route path='/autores' component={Autores}/>
      <Route path='/livros' component={Livros}/>
      <Route path='/sobre' component={Sobre} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
//BrowserRouter: a partir daqui defino quais rotas serão usadas
//Switch: nele estão contidas as rotas
//Route deve ser utilizado em cada rota, passando o caminho e o componente
//Colocar uma rota sem caminho para ser usada como not found
//o parametro exact={true} define que a rota só pode ser acessada pelo caminho exato do path, assim evitando confusão gerada pela comparação parcial

serviceWorker.unregister();
