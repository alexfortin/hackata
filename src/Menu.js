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
  render: function() {
    return (
        <Tabs tabActive={1}>
            <Tabs.Panel title='Appetizers'>
                <Appetizers></Appetizers>
            </Tabs.Panel>
            <Tabs.Panel title='Entree'>
                <Appetizers></Appetizers>
            </Tabs.Panel>
            <Tabs.Panel title='Nigiri'>
                <Appetizers></Appetizers>
            </Tabs.Panel>
            <Tabs.Panel title='Sashimi'>
                <Appetizers></Appetizers>
            </Tabs.Panel>
            <Tabs.Panel title='Standard Rolls and Hand Rolls'>
                <Appetizers></Appetizers>
            </Tabs.Panel>
            <Tabs.Panel title='Fresh Rolls'>
                <Appetizers></Appetizers>
            </Tabs.Panel>
            <Tabs.Panel title='Baked Rolls'>
                <Appetizers></Appetizers>
            </Tabs.Panel>
            <Tabs.Panel title='Tempura Rolls'>
                <Appetizers></Appetizers>
            </Tabs.Panel>
            <Tabs.Panel title='Lunch Specials'>
                <Appetizers></Appetizers>
            </Tabs.Panel>
            <Tabs.Panel title='Donburi'>
                <Appetizers></Appetizers>
            </Tabs.Panel>
            <Tabs.Panel title='Noodles'>
                <Appetizers></Appetizers>
            </Tabs.Panel>
            <Tabs.Panel title='Kids Menu'>
                <Appetizers></Appetizers>
            </Tabs.Panel>
            <Tabs.Panel title='Dessert'>
                <Appetizers></Appetizers>
            </Tabs.Panel>
        </Tabs>
    );
  }
});
