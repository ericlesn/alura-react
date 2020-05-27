const ApiService = {
    ListaAutores: () =>{
        return fetch('http://localhost:8000/api/autor') //fazendo a requisição
            .then(res =>res.json()) //transformando em JSON
    },
    ListaLivros: () =>{
        return fetch('http://localhost:8000/api/autor/livro') //fazendo a requisição
            .then(res =>res.json()) //transformando em JSON
    },
    ListaNomes: () =>{
        return fetch('http://localhost:8000/api/autor/nome') //fazendo a requisição
            .then(res =>res.json()) //transformando em JSON
    },
    CriaAutor: autor =>{
        return fetch('http://localhost:8000/api/autor', {method:'POST', headers:{'content-type':'application/json'}, body: autor}) //fazendo a requisição
            .then(res =>res.json()) //transformando em JSON
    },
    RemoveAutor: id =>{
        return fetch(`http://localhost:8000/api/autor/${id}`, {method: 'DELETE', headers:{'content-type': 'application/json'}}) //fazendo a requisição
            .then(res =>res.json()) //transformando em JSON
    }


}

export default ApiService;
