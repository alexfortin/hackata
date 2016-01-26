import '../public/main.css';

var React = require('react');
var ReactDom = require('react-dom');
var About = require('./About');
var Navbar = require('./Navbar');
var Greeting = require('./Greeting');
var MobileMenu = require('./MobileMenu');
var Tab = require('./Menu');
var Greeting = require('./Greeting');
var LocationAndContact = require('./LocationAndContact');
var CollapsibleNavbar = require('./CollapsibleNavbar');

//var TabD = React.createClass({
//    onBeforeChange: function(selectedIndex, $selectedPanel, $selectedTabMenu) {
//        console.log('before the tab ' + selectedIndex);
//    },
//    onAfterChange: function(selectedIndex, $selectedPanel, $selectedTabMenu) {
//        console.log('after the tab ' + selectedIndex);
//    },
//    render: function() {
//        return (
//            <TabDropdown tabActive={1} onBeforeChange={this.onBeforeChange} onAfterChange={this.onAfterChange}>
//                <TabDropdown.Panel title='Appetizers'>
//                    <div>a</div>
//                </TabDropdown.Panel>
//                <TabDropdown.Panel title='Rolls'>
//                    <div>b</div>
//                </TabDropdown.Panel>
//                <TabDropdown.Panel title='Nagiri/Sashimi'>
//                    <div>c</div>
//                </TabDropdown.Panel>
//                <TabDropdown.Panel title='Entrees'>
//                    <div>d</div>
//                </TabDropdown.Panel>
//                <TabDropdown.Panel title='Specials'>
//                    <div>e</div>
//                </TabDropdown.Panel>
//                <TabDropdown.Panel title='Deserts'>
//                    <div>f</div>
//                </TabDropdown.Panel>
//            </TabDropdown>
//        );
//    }
//});

ReactDom.render(<Navbar />, document.getElementById('navbar'));
ReactDom.render(<CollapsibleNavbar/>, document.getElementById('CollapsibleNavbar'));
ReactDom.render(<Greeting/>, document.getElementById('greeting'));
ReactDom.render(<MobileMenu />, document.getElementById('tab'));
ReactDom.render(<MobileMenu />, document.getElementById('tab-dropdown'));
ReactDom.render(<LocationAndContact />, document.getElementById('misc-info'));
ReactDom.render(<About />, document.getElementById('about-info'));
