var React = require('react');

module.exports= React.createClass({
  render: function (){
    return (
      <div className="misc-info">
        <img src="map.jpg" className="map-background"></img>
        <img src="hours.jpg" className="contact-background"></img>
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


var Location = React.createClass({
  render: function (){
    return (
      <div className="location">
        <p className="location-name">Hakata Sushi Bar and Grill</p>
        <p className="location-address">900 E Pecan St, Pflugerville, TX 78660</p>
        <a href="https://goo.gl/9n80QB" target="_blank">Get Directions</a>
      </div>
    )
  }
});

var Contact = React.createClass({
  render: function (){
    return (
      <div className="contact">
        <div className="hours">
          <p>Hours</p>
          <p>Mon-Th 11am-9:30pm</p>
          <p>Fri-Sat 12pm-10:00pm</p>
          <p>Sun Closed</p>
        </div>
        <div className="phone">
          <p>Contact Us</p>
          <p>(512) 670-2480</p>
        </div>
      </div>
    )
  }
});
