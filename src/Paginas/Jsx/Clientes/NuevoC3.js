import React from 'react';

/*
uso de props:
-props -> propiedad (parametros)
-en java usamos prametre para trabajar con funciones getters y setters
-un props puede tener cualquier tipo de datos  
*/

const nuevoC3 = (props) => {
    return <div>
        <p>Mi nombre es {props.nombre}, soy un cliente
        y tengo {props.edad} años de edad.
    </p>
    {props.children}

    </div> 
     
}

export default nuevoC3;