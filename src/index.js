import React from 'react'
import ReactDOM from 'react-dom'
import {hashHistory,
        Route,
        Router} from 'react-router'

import App from './App'
import Home from './Home'
import Register from './Register'
import './index.css'
import './styles/bootstrap.css'


const Components=(
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="home" component={Home} />
    <Route path="register" component={Register} />
  </Router>
)
ReactDOM.render(Components,
  document.getElementById('root')
);
