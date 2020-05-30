import React, {Fragment, Component } from 'react';
import Header from '../../Components/Header/Header';
import DataTable from '../../Components/DataTable/DataTable'
import ApiService from '../../utils/ApiService';
import PopUp from  '../../utils/PopUp'


class Autores extends Component{
    constructor(props){
        super(props);

        this.state = {
            nomes:[],
            titulo: 'Autores'
        }
    }
    componentDidMount(){
        ApiService.ListaNomes()
            .then(res => ApiService.TrataErros(res))
            .then(res =>{
                if(res.message === 'success'){
                    PopUp.exibeMensagem('sucess', 'Autores listados com sucesso')
                    this.setState({livros:[...this.state.nomes, res.data]})
                    
                }
            })
            .catch(err => PopUp.exibeMensagem('err', 'Falha na listagem de autores')) 
    }
    render(){
        return(
            <Fragment>
                <Header />
                <div className='container'>
                    <h1>Página de Autores</h1>
                    <DataTable dados={this.state.nomes} titulo={this.state.titulo} colunas={['nome']}/>
                </div>
    
            </Fragment>
        );
    }

}

export default Autores;