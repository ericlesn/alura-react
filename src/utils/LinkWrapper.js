import React from 'react';
import {NavLink} from 'react-router-dom';

const LinkWrapper = props =>{
    return(
        <NavLink activeStyle={{fontWeight:'bold'}} {...props}/>
    );
}

export default LinkWrapper;

//utilizando o chamado "High Order Component", um componente que retorna outro por baixo dos panos.
//utilizando NavLink para realçar o link que está sendo usado