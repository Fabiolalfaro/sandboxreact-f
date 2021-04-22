/* ejemplo de class based component
siempre dee heredar de la clase Compoenet */

import { React, Component } from 'react';
import NuevoC1 from './NuevoC1';
import NuevoC2 from './NuevoC2';
import NuevoC3 from './NuevoC3';
import NuevoC4 from './NuevoC4';

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
                    <p>Ejemplo props.children y state</p>
                    <h2>Son las {this.state.date.toLocaleTimeString()}</h2>
                </NuevoC3>   
                <NuevoC4 nombre="Jared leto" edad="49"/>
            </div>
        )
        
    }

}

export default verC1;