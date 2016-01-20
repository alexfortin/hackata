import '../public/main.css';

var React = require('react'),
    Sticky = require('react-sticky');
var ReactDom = require('react-dom');
var About = require('./About');
var Navbar2 = require('./Navbar');
var Greeting = require('./Greeting');
var Menu = require('./Menu');
var LocationAndContact = require('./LocationAndContact');
var Navbar = require("react-bootstrap/lib/Navbar");
var Nav = require("react-bootstrap/lib/Nav");
var NavItem = require("react-bootstrap/lib/NavItem");
var NavDropdown = require("react-bootstrap/lib/NavDropdown");
var MenuItem = require("react-bootstrap/lib/MenuItem");
var NavBarTest = require('./CollapsibleNavbar');

ReactDom.render(<Navbar2 />, document.getElementById('navbar'));
ReactDom.render(<NavBarTest/>, document.getElementById('navbar2'));
ReactDom.render(<Menu />, document.getElementById('tab'));
ReactDom.render(<LocationAndContact />, document.getElementById('misc-info'));
ReactDom.render(<About />, document.getElementById('about-info'));
