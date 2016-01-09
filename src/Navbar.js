var React = require('react');

module.exports= React.createClass({
  render: function (){
    return (
      <div class="navbar">
        <span id="target-menu">
            <a href="#menu-tab">MENU</a>
        </span>
        <span id="target-menu">
            <a href="#location">LOCATION AND HOURS</a>
        </span>
        <img src="./assets/Logo.png"/>
        <span id="target-contact">
            <a href="#contact-info">CONTACT</a>
        </span>
        <span id="target-about">
            <a href="#about-info">ABOUT</a>
        </span>
      </div>
    )
  }
});
