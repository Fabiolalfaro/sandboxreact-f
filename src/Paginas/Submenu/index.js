import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import '../Menu/menu.css';

function submenu(){
    return(
        <div>
            <ul>
                <li>
                    <BrowserRouter>
                        <Link to="/jsx">JSX</Link>
                    </BrowserRouter>
                </li>
                <li>
                    <BrowserRouter>
                        <Link to="/props">Props</Link>
                    </BrowserRouter>
                </li>
                <li>
                    <BrowserRouter>                    
                        <Link to="/state">States</Link>
                    </BrowserRouter>                        
                </li>                
            </ul>
        </div>
    )
}

export default submenu;