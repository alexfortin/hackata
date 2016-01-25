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
                <Appetizers></Appetizers>
                <Appetizers></Appetizers>
            </Tabs.Panel>
            <Tabs.Panel title='Rolls'>
                <Appetizers></Appetizers>
            </Tabs.Panel>
            <Tabs.Panel title='Nagiri/Sashimi'>
                <Appetizers></Appetizers>
            </Tabs.Panel>
            <Tabs.Panel title='Entrees'>
                <Appetizers></Appetizers>
            </Tabs.Panel>
            <Tabs.Panel title='Specials'>
                <Appetizers></Appetizers>
            </Tabs.Panel>
            <Tabs.Panel title='Deserts'>
                <Appetizers></Appetizers>
            </Tabs.Panel>
        </Tabs>
    );
  }
});
