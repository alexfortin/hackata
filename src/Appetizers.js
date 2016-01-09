var React = require('react');

module.exports= React.createClass({
  render: function (){
    return (
      <div className="menu">
        <p>
          <span>Sushi £7</span>
          <span>Ice Cream Sushi £7</span>
        </p>
        <p>
          <span>Brownies £7</span>
          <span>Bae £7</span>
        </p>
      </div>
    )
  }
});
