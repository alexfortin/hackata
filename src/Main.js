import '../css/main.css';

var React = require('react'),
 Sticky = require('react-sticky');
var ReactDom = require('react-dom');
var About = require('./About');
var Navbar = require('./Navbar');
var Greeting = require('./Greeting');
var Menu = require('./Menu');
var LocationAndContact = require('./LocationAndContact');

module.exports= React.createClass({
  render: function (){
    return (
      <div className="misc-info">
        <div id="location-info" className="location">
          <Location></Location>
        </div>
        <div id="contact-info" className="contact-info">
          <Contact></Contact>
        </div>
      </div>
    )
  }
});


ReactDom.render(<Greeting />, document.getElementById('greeting'));
ReactDom.render(<Navbar />, document.getElementById('navbar'));
ReactDom.render(<Menu />, document.getElementById('tab'));
ReactDom.render(<LocationAndContact />, document.getElementById('misc-info'));
ReactDom.render(<About />, document.getElementById('about-info'));
