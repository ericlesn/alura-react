import validador from 'validator';

class FormValidator{
    constructor(validacoes){
        this.validacoes = validacoes;
    }

    valida(state){
    let validacao = this.valido();

    this.validacoes.forEach(regra =>{ //para cada regra de validação que eu tiver
        if(!validacao[regra.campo].isInvalid){
            const campoValor =state[regra.campo.toString()]; // pegando o valor recebido e passando para String
            const args = regra.args||[];
            const metodoValidacao = typeof regra.metodo === 'string' ? validador[regra.metodo]: regra.metodo;
    
            if(metodoValidacao(campoValor, ...args, state)!== regra.validoQuando){
                validacao[regra.campo] = {
                    isInvalid: true,
                    message: regra.mensagem
                }
                validacao.isValid = false;
            }  
        }
        
    });
    return validacao;
}

    valido(){
        const validacao = {}

        this.validacoes.map(regra =>(
            validacao[regra.campo] = {isInvalid: false, message:''}
        ));

        return {isValid: true,...validacao};
    }
}

export default FormValidator;