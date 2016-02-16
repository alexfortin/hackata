var React = require('react');

module.exports= React.createClass({
  render: function (){
    return (
      <div className="greeting">
        <div className="greeting-container">
          <span className="greeting-title">Premium Sushi</span>
          <br></br>
          <span className="greeting-body">Affordable Prices</span>
        </div>
        <div className="menu-link">
          <a href="#menu-tab">VIEW MENU</a>
          </div>
      </div>
    )
  }
});
