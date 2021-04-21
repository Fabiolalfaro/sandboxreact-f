/* ejemplo de class based component
siempre dee heredar de la clase Compoenet */

import { React, Component } from 'react';
import NuevoC1 from './NuevoC1';
import NuevoC2 from './NuevoC2';

class verC1 extends Component{
    render(){
        return(
            <div>
                <p>Uso de class based components</p>
                {/*<NuevoC1 />*/}
                <NuevoC2/>
            </div>
        )
        
    }

}

export default verC1;