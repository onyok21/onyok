import React from 'react'
import {Well,
        Navbar } from 'react-bootstrap'


export default class Home extends React.Component{

 render(){

     return(
        <Well>
            <nav className="navbar-kwp-header navbar-default navbar-fixed-top">
                <Navbar inverse>
                <Navbar.Header>
                <Navbar.Brand>
                    <a> Onyok </a>
                </Navbar.Brand>
                </Navbar.Header>

                    <Navbar.Collapse>
                        <ul className="nav navbar-nav">
                            <li><a href="#">link</a></li>
                             <li><a href="#">link</a></li>
                        </ul>
                    </Navbar.Collapse>
               </Navbar>     
            </nav>
        </Well>
     );
 }   
}