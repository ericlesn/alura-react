import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home/Home';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Autores from './Pages/Autores/Autores';
import Livros from './Pages/Livros/Livros';
import Sobre from './Pages/Sobre/Sobre';
import NotFound from './Pages/NotFound/NotFound';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={Home}/>
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
