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

class VerC2 extends Component{

    state = {
        vendedores:vendedores
      }
    
    
    
    render() {
        return (<div>
            {this.state.vendedores.map((ele, i)=>(
                if(i==0){
                <NuevoC4a
                   nombre= {<p key={i}>{ele.nombre} - {i}</p>}
                   edad = {<p key={i} >{ele.edad} - {i} </p>}
                > 
                    <p> Pollo Campero</p>
                
                </NuevoC4a>   
                
                }else if(i==1){
                    <NuevoC4a
                    nombre= {<p key={i}>{ele.nombre} - {i}</p>}
                    edad = {<p key={i} >{ele.edad} - {i} </p>}
                 />
                }
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


