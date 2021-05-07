import {React, Component} from 'react';


/*
uso de props:
-props -> propiedad (parametros)
-en java usamos parametros para trabajar con funciones getters y setters
-un props puede tener cualquier tipo de datos
-utilizacion de props en un class based component
-class based component
*/

const nuevoC4a =(props,{nombre,edad}) => {

    return <div class="container">
                <div class="row justify-content-md-center">
                    <div class="col col-lg-2">
                        {nombre}
                    </div>
                    <div class="col-md-auto">
                        {edad}
                    </div>
                    <div class="col col-lg-2">
                        {props.children}
                    </div>
                </div>
            </div>    
    
}

export default nuevoC4a;