/* ejemplo de class based component
siempre heredar de la clase Component 

ejemplo 1 de uso de state
*/

import { React, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NuevoC1 from './NuevoC1';
import NuevoC2 from './NuevoC2';
import NuevoC3 from './NuevoC3';
import NuevoC4 from './NuevoC4';
import Contador from './Contador';

class verC1 extends Component{

    constructor(props){
        super(props);
        this.state = {date: new Date()}
    }

    render(){
        return(
            <div>
                <p>Uso de class based components</p>
                <NuevoC1 />
                <NuevoC2 />
                <NuevoC3 nombre="Luke SkyWalker" edad="20">
                    <div className="control2">
                        <div className="control3">
                            <h1 className="cliente3">Ejemplo props.children y state</h1> 
                            <hr></hr>
                            <h3>Son las {this.state.date.toLocaleTimeString()}</h3> 
                        </div>
                    </div>
                </NuevoC3 >   
                <NuevoC4 nombre="Jared leto" edad="49"/>
                <Contador>
                    <h1>Ejemplo de props.children y state</h1>
                </Contador>
            </div>
        )
        
    }

}

export default verC1;