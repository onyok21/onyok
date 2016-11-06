import React from 'react'
import {Link} from 'react-router'

export default class App extends React.Component {

    render() {

        return (
		        <div>	
					<nav className="navbar navbar-default">
						<div className="container-fluid">
						    <div className="navbar-header">
						      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
						        <span className="sr-only">Toggle navigation</span>
						        <span className="icon-bar"></span>
						        <span className="icon-bar"></span>
						        <span className="icon-bar"></span>
						      </button>
						      <a className="navbar-brand" href="#">Coffee House</a>
						    </div>

						    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						      <ul className="nav navbar-nav">
						        <li><Link to="home">HOME</Link></li>
						        <li><Link to="about">ABOUT</Link></li>
						        <li><Link to="menu">MENU</Link></li>
						        <li><Link to="special">SPECIALS</Link></li>
						        <li><Link to="event">EVENTS</Link></li>
						        <li><Link to="contact">CONTACT</Link></li>
						       </ul>

						       <form className="navbar-form navbar-left" role="search">
				        	<div className="form-group">
				          		<input type="text" className="form-control" placeholder="Search"/>
				        	</div>
				        
				        	<button type="submit" className="btn btn-default">Submit</button>
				    	</form>
						    </div>
						</div>

					</nav>
					{this.props.children}
				</div>
        );
    }
}       