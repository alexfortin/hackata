import '../public/main.css';

var React = require('react');
var ReactDom = require('react-dom');
var About = require('./About');
var Navbar = require('./Navbar');
var Greeting = require('./Greeting');
var Menu = require('./Menu');
var Greeting = require('./Greeting');
var LocationAndContact = require('./LocationAndContact');
var CollapsibleNavbar = require('./CollapsibleNavbar');

ReactDom.render(<Navbar />, document.getElementById('navbar'));
ReactDom.render(<CollapsibleNavbar/>, document.getElementById('CollapsibleNavbar'));
ReactDom.render(<Greeting/>, document.getElementById('greeting'));
ReactDom.render(<Menu />, document.getElementById('tab'));
ReactDom.render(<LocationAndContact />, document.getElementById('misc-info'));
ReactDom.render(<About />, document.getElementById('about-info'));
