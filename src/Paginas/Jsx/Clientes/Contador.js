import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
/*
ejemplo de operaciones con state 
*/

class contador extends Component{

    constructor(props){
        super(props);

        this.state={
            nombre:"Anya Taylor-Joy",
            cuenta:1,
        }
    }

    render(){
    return <div className="container">
                {this.props.children}
                <div className="control2">
                    <div className="control cuadro" >
                        <div class="col-xs-12 col-md-12">
                        <br></br>
                        <p>Contador</p>
                            <span className="btn2 btn btn-primary"
                            onClick={() =>{
                                this.state.cuenta--;
                                this.forceUpdate();
                            }}
                            >-</span>
                            
                            <span className="btn2 btn btn-primary"
                            onClick={() =>{
                                this.state.cuenta++;
                                this.forceUpdate();
                            }}
                            >+</span>
                        </div> 
                        <br></br>
                        <p>{this.state.cuenta}</p>
                    </div>
                </div>
               

             </div>
    }
}

export default contador;

