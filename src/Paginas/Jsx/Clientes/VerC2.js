import React, { Component } from 'react';
import NuevoC4a from './NuevoC4a';

const vendedores=[
    {nombre:"Juan", edad:"22"},
    {nombre:"José", edad:"21"},
    {nombre:"Joshepine", edad:"20"}
];

const vendeDos=[
    {nombre:"Rosa", edad:"32"},
    {nombre:"Roger", edad:"31"},
    {nombre:"Roxana", edad:"30"}
];

class VerC2 extends Component {
    

    state = {
        vendedores:vendedores
      }
    
    
    
    render() {
        return (<div>
            {this.state.vendedores.map((ele)=>(
                <NuevoC4a nombre={ele.nombre} edad={ele.edad} />
            
            ))}

            <span className="btn2 btn btn-primary"
                            onClick={() =>{
                                this.setState({vendedores:vendeDos})
                                }
                            }>Change Text</span>
            </div>
        ) 
    }
}

export default VerC2;


