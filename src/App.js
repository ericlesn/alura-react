import React,{Component, Fragment} from 'react';
import Tabela from './Tabela';
import Form from './Formulario'
import 'materialize-css/dist/css/materialize.min.css';
import Header from './Header';
import './App.css';
import PopUp from './PopUp';
import ApiService from './ApiService';  

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      autores:[],
    }
  }
  
removeAutor= id =>{
  const {autores} = this.state;

  this.setState(
    {
      autores: autores.filter((autor)=>{
        return autor.id !== id;
      }),
    }
  );
  PopUp.exibeMensagem('error', "Autor removido com sucesso");
  ApiService.RemoveAutor(id);
}

escutaSubmit= autor =>{
  ApiService.CriaAutor(JSON.stringify(autor))
    .then(res => res.data)
    .then(autor =>{
      this.setState({autores:[...this.state.autores, autor]})
    })
  PopUp.exibeMensagem('success', "Autor adicionado com sucesso!")
}
  componentDidMount(){
    ApiService.ListaNomes().then(res => {
        this.setState({livros:[...this.state.autores, ...res.data]})
    });

  }
  render(){  
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <Tabela autores = {this.state.autores} removeAutor ={this.removeAutor}/>   
          <Form escutaSubmit={this.escutaSubmit}/>
        </div>
      </Fragment>
    );
  }
}

export default App;
