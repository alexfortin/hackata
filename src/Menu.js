var React = require('react');
var Tabs = require('react-simpletabs');
var Appetizers = require('./Appetizers');

module.exports= React.createClass({
  render: function (){
    return (
      <div className="menu-wrapper">
          <span className="menu-title">MENU</span>
          <br></br>
          <span className="menu-download">Download PDF</span>
          <div className="menu">
            <Tab></Tab>
          </div>
      </div>
    )
  }
});

var Lunch = React.createClass({
  render: function (){
    return (
      <div>
        <p><strong>Mains</strong></p>
        <p>Gnocchi, onion squash, goat</p>
        <p>Malted spelt, violet artichoke, rainbow chard</p>
        <p>Smoked salmon quiche, spinach, Ogleshield & baby gem salad £13</p>
        <p>Rotisserie chicken, baby gem, Caesar dressing £14</p>
        <p>Duck sausage, Castelluccio lentils, fennel slaw £15</p>
        <p>Cod, Jerusalem artichoke, black truffle £26</p>
        <p>Middle White pork chop, new-season garlic, Bobby beans £22</p>
        <p>Pheasant, spelt, turnips, quince mustard £21</p>
        <p>Gnocchi, onion squash, goat</p>
        <p>Malted spelt, violet artichoke, rainbow chard</p>
        <p>Smoked salmon quiche, spinach, Ogleshield & baby gem salad £13</p>
        <p>Rotisserie chicken, baby gem, Caesar dressing £14</p>
        <p>Duck sausage, Castelluccio lentils, fennel slaw £15</p>
        <p>Cod, Jerusalem artichoke, black truffle £26</p>
        <p>Middle White pork chop, new-season garlic, Bobby beans £22</p>
        <p>Pheasant, spelt, turnips, quince mustard £21</p>
        <p>Gnocchi, onion squash, goat</p>
        <p>Malted spelt, violet artichoke, rainbow chard</p>
        <p>Smoked salmon quiche, spinach, Ogleshield & baby gem salad £13</p>
        <p>Rotisserie chicken, baby gem, Caesar dressing £14</p>
        <p>Duck sausage, Castelluccio lentils, fennel slaw £15</p>
        <p>Cod, Jerusalem artichoke, black truffle £26</p>
        <p>Middle White pork chop, new-season garlic, Bobby beans £22</p>
        <p>Pheasant, spelt, turnips, quince mustard £21</p>
        <p>Gnocchi, onion squash, goat</p>
        <p>Malted spelt, violet artichoke, rainbow chard</p>
        <p>Smoked salmon quiche, spinach, Ogleshield & baby gem salad £13</p>
        <p>Rotisserie chicken, baby gem, Caesar dressing £14</p>
        <p>Duck sausage, Castelluccio lentils, fennel slaw £15</p>
        <p>Cod, Jerusalem artichoke, black truffle £26</p>
        <p>Middle White pork chop, new-season garlic, Bobby beans £22</p>
        <p>Pheasant, spelt, turnips, quince mustard £21</p>
        <p>Gnocchi, onion squash, goat</p>
        <p>Malted spelt, violet artichoke, rainbow chard</p>
        <p>Smoked salmon quiche, spinach, Ogleshield & baby gem salad £13</p>
        <p>Rotisserie chicken, baby gem, Caesar dressing £14</p>
        <p>Duck sausage, Castelluccio lentils, fennel slaw £15</p>
        <p>Cod, Jerusalem artichoke, black truffle £26</p>
        <p>Middle White pork chop, new-season garlic, Bobby beans £22</p>
        <p>Pheasant, spelt, turnips, quince mustard £21</p>
        <p>Gnocchi, onion squash, goat</p>
        <p>Malted spelt, violet artichoke, rainbow chard</p>
        <p>Smoked salmon quiche, spinach, Ogleshield & baby gem salad £13</p>
        <p>Rotisserie chicken, baby gem, Caesar dressing £14</p>
        <p>Duck sausage, Castelluccio lentils, fennel slaw £15</p>
        <p>Cod, Jerusalem artichoke, black truffle £26</p>
        <p>Middle White pork chop, new-season garlic, Bobby beans £22</p>
        <p>Pheasant, spelt, turnips, quince mustard £21</p>
      </div>
    )
  }
});

var Dinner = React.createClass({
  render: function (){
    return (
      <div className="menu">
        <p><strong>Desserts</strong></p>
        <p>Sweetcorn ice cream, corn cake £7</p>
        <p>Caramelised filo pastry, raspberry, cream cheese, beetroot syrup £7</p>
        <p>Organic chocolate mousse, orange, crème fraÎche £6</p>
        <p>Fifteen carrot cake trifle £6 </p>
        <p>Selection of British cheese, apple chutney, house-made crackers £11</p>
        <p>Middle White pork chop, pickled garlic, parsley root, kale</p>
      </div>
    )
  }
});

var Appetizers = React.createClass({
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

var Tab = React.createClass({
  onBeforeChange: function(selectedIndex, $selectedPanel, $selectedTabMenu) {
    console.log('before the tab ' + selectedIndex);
  },
  onAfterChange: function(selectedIndex, $selectedPanel, $selectedTabMenu) {
    console.log('after the tab ' + selectedIndex);
  },
  render: function() {
    return (
      <Tabs tabActive={1} onBeforeChange={this.onBeforeChange} onAfterChange={this.onAfterChange}>
        <Tabs.Panel title='Appetizers'>
          <Appetizers></Appetizers>
        </Tabs.Panel>
        <Tabs.Panel title='Rolls'>
        <Lunch></Lunch>
        </Tabs.Panel>
        <Tabs.Panel title='Nagiri/Sashimi'>
        <Lunch></Lunch>
        </Tabs.Panel>
        <Tabs.Panel title='Entrees'>
          <Lunch></Lunch>
        </Tabs.Panel>
        <Tabs.Panel title='Specials'>
        <Lunch></Lunch>
        </Tabs.Panel>
        <Tabs.Panel title='Deserts'>
        <Lunch></Lunch>
        </Tabs.Panel>
      </Tabs>
    );
  }
});
