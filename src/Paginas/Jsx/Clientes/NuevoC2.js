import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
/*
componente functional importar una libreria math utilizando una sintaxis especfica
se espera tener una mejor comprencion del manejo del DOM

Se modifico el componente de tipo function a class Component

ejemplo 2 de uso de state
*/

class nuevoC2 extends Component{

    constructor(props){
        super(props);

        this.state={
            nombre:"Anya Taylor-Joy"
        }
    }

    render(){
    return <div className="cliente2 container">
                <p>Mi nombre es {this.state.nombre}, soy un Cliente
                y tengo {Math.floor(Math.random()*20)} años de edad
                </p>
                
             </div>
    }
}

export default nuevoC2;

