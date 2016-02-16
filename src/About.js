var React = require('react');

module.exports= React.createClass({
  render: function (){
    return (
      <div className="about">
          <img src="About.jpg" className="about-background"></img>
          <div className="about-text">
            <div className="about-header">ABOUT HAKATA SUSHI BAR AND GRILL</div>
            <div>Hakata Sushi offers the finest sushi dining experience in Austin, Round Rock and Pflugerville Texas.
                We offer fresh and delicious rolls fusing the most delectable cuisines from Japan. We serve our food in our comfortable,
                friendly and elegant setting. We look forward to your visit!</div>
          </div>
      </div>
    )
  }
});
