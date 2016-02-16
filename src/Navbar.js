var React = require('react');
var React = require('react'),
 Sticky = require('react-sticky');

module.exports= React.createClass({
  render: function (){
    return (
      <Sticky className="navbar" topOffset={60} stickyStyle={stickyNavBar}>
        <div className="title">Hakata Sushi</div>
        <span id="target-menu">
            <a href="#menu-tab">MENU</a>
        </span>
        <span id="target-menu">
            <a href="#location-info">LOCATION AND HOURS</a>
        </span>
        <span id="target-contact">
            <a href="#location-info">CONTACT</a>
        </span>
        <span id="target-about">
            <a href="#about-info">ABOUT</a>
        </span>
      </Sticky>
    )
  }
});


var stickyNavBar = {
    position: 'fixed',
    backgroundColor: 'white',
    maxWidth: '1440px',
    top: '0px',
    left: '0px',
    right: '0px',
    display: 'block',
    zIndex: '1',
    margin: '0 auto',
    height: '100px'
};

var stickyHeaderStyle = {
  position: 'fixed',
  backgroundColor: 'white',
  left: '0px',
  right: '0px',
  display: 'block',
  zIndex: '1'
};

var headerStyle = {
  // left: '0px',
  // right: '0px',
  // display: 'block',
  // zIndex: '1'
};
