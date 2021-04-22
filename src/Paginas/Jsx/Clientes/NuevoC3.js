import React from 'react';

/*
uso de props:
-props -> propiedad (parametros)
-en java usamos prametro para trabajar con funciones getters y setters
-un props puede tener cualquier tipo de datos  

-props.children ejemplo 1
*/

const nuevoC3 = (props) => {
    return <div className="cliente13">
        <p>Mi nombre es {props.nombre}, soy un cliente
        y tengo {props.edad} años de edad.
    </p>
    {props.children}
    <br></br>

    </div> 
     
}

export default nuevoC3;