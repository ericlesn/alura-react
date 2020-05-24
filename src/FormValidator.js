import validador from 'validator';

class FormValidator{
    constructor(validacao){
        this.validacao = validacao;
    }

    valida(state){
    const campoValor =state[this.validacao.campo.toString()]; // pegando o valor recebido e passando para String
    const metodoValidacao = validador[this.validacao.metodo];

    if(metodoValidacao(campoValor, [], state)){
        console.log('invalido')
        return false;
    }else{
        console.log('válido');
        return true;
    }
    
    }
}

export default FormValidator;