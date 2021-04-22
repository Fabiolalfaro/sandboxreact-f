import {React, Component} from 'react';

/*
uso de props:
-props -> propiedad (parametros)
-en java usamos parametros para trabajar con funciones getters y setters
-un props puede tener cualquier tipo de datos
-utilizacion de props en un class based component
-class based component
*/

class nuevoC4 extends Component{

    render(){
    return <div className="cliente4">
                <p>Mi nombre es {this.props.nombre}, soy un
                cliente y tengo {this.props.edad} años</p>
             </div>
    }
}

export default nuevoC4;