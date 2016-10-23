import React from 'react'
import ReactDOM from 'react-dom'
import {Router,
		Route,
		hashHistory } from 'react-router'

//import {createStore} from 'react-redux'
import App from './components/App'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Menu from './components/Pages/Menu'
import Special from './components/Pages/Special'
import Event from './components/Pages/Event'
import Contact from './components/Pages/Contact'

import './styles/bootstrap.css'

const Components=(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<Route path="home" component={Home}></Route>
			<Route path="about" component={About}></Route>
			<Route path="menu" component={Menu}></Route>
			<Route path="special" component={Special}></Route>
			<Route path="event" component={Event}></Route>
			<Route path="contact" component={Contact}></Route>
		</Route>
	</Router>
);

ReactDOM.render(Components, document.getElementById('root'));