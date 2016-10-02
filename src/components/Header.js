import React from 'react'
import {Well,
        Navbar,
        Nav,
        NavItem} from 'react-bootstrap'
//import {Link} from 'react-router'

export default class Header extends React.Component {

    render() {
        return (
            <Well>
                <div className="container">
                     <Navbar inverse>
                        <Navbar.Header>
                        <Navbar.Brand>
                            <a>Junerey Olaer "ONYOK"</a>

                        </Navbar.Brand>
                        <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1}>Home</NavItem>
                            <NavItem eventKey={2}>About</NavItem>
                            <NavItem eventKey={4}>Photo's</NavItem>
                            <NavItem eventKey={3}>Portfolio</NavItem>
                            <NavItem eventKey={5}>Services</NavItem>
                            <NavItem eventKey={8}>Blog</NavItem>
                        </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    {this.props.children}
                    
                </div>
            </Well>
        );
    }
}       