var React = require('react');

module.exports= React.createClass({
  render: function (){
    return (
      <div className="misc-info">
        <img src="map.jpg" id="location-img" className="map-background"></img>
        <img src="Hours.jpg" id="contact-img" className="contact-background"></img>
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
          <p>Mon-Thur 11:10am-9:30pm</p>
          <p>Fri, Sat 11:10am-10:00pm</p>
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
