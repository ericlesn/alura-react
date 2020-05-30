import React,{Component, Fragment} from 'react';
import Tabela from '../../Components/Tabela/Tabela';
import Form from '../../Components/Formulario/Formulario'
import 'materialize-css/dist/css/materialize.min.css';
import Header from '../../Components/Header/Header';
import './Home.css';
import PopUp from '../../utils/PopUp';
import ApiService from '../../utils/ApiService';  

class Home extends Component{

  constructor(props){
    super(props);
    this.state = {
      autores:[],
    }
  }
  
removeAutor= id =>{
  const {autores} = this.state;
  
    const autoresAtualizado= autores.filter(autor=>{
        return autor.id !== id;
      })
      ApiService.RemoveAutor(id)
        .then(res =>{
          if(res.message === 'deleted'){
            this.setState({autores:[...autoresAtualizado]})
            PopUp.exibeMensagem('error', "Autor removido com sucesso");
          }
        })
    .catch(err =>  PopUp.exibeMensagem('error', "Não foi possivel remover o autor, tente novamente"))

}

escutaSubmit= autor =>{
  ApiService.CriaAutor(JSON.stringify(autor))
    .then(res =>{
      if(res.message === 'success')
        this.setState({autores:[...this.state.autores,res.data]})
        PopUp.exibeMensagem('success', "Autor adicionado com sucesso!")
    })
    .catch(err =>  PopUp.exibeMensagem('error', "Não foi possivel adicionar o autor, tente novamente"))
}
  componentDidMount(){
    ApiService.ListaAutores()
    .then(res =>{
      if(res.message === 'success'){
          this.setState({autores:[...this.state.autores, ...res.data]})
      }
    })
    .catch(err =>  PopUp.exibeMensagem('error', "Erro na comunicação com a API, tente novamente"))
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

export default Home;
