import React, { Component } from 'react';

/*
componente functionalimportar una libreria math utilizzando una sintaxis especfica
se espera tener una mejor comprencion del manejo del DOM
*/

class nuevoC2 extends Component{

    render(){
    return <div>
                <p>Mi nombre es Bruce Wayne, soy un Cliente
                y tengo {Math.floor(Math.random()*20)} años de edad
                </p>
                {this.props.children}

             </div>
    }
}

export default nuevoC2;

