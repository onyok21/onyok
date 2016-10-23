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
                            <NavItem>Home</NavItem>
                            <NavItem>About</NavItem>
                            <NavItem>Photo's</NavItem>
                            <NavItem>Portfolio</NavItem>
                            <NavItem>Services</NavItem>
                            <NavItem>Contact</NavItem>
                            <NavItem>Blog</NavItem>
                            {this.props.children}
                        </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </Well>
        );
    }
}       