var React = require('react');
var TabDropdown = require('./TabDropdown');
var Appetizers = require('./Appetizers');

module.exports =  React.createClass({
    render: function() {
        return (
            <div className="menu-wrapper">
                <span className="menu-title">MENU</span>
                <br></br>
                <span className="menu-download">Download PDF</span>
                <div className="menu">
                    <TabDropdown tabActive={1}>
                        <TabDropdown.Panel title='Appetizers'>
                            <Appetizers></Appetizers>
                        </TabDropdown.Panel>
                        <TabDropdown.Panel title='Entree'>
                            <Appetizers></Appetizers>
                        </TabDropdown.Panel>
                        <TabDropdown.Panel title='Nigiri'>
                            <Appetizers></Appetizers>
                        </TabDropdown.Panel>
                        <TabDropdown.Panel title='Sashimi'>
                            <Appetizers></Appetizers>
                        </TabDropdown.Panel>
                        <TabDropdown.Panel title='Standard Rolls and Hand Rolls'>
                            <Appetizers></Appetizers>
                        </TabDropdown.Panel>
                        <TabDropdown.Panel title='Fresh Rolls'>
                            <Appetizers></Appetizers>
                        </TabDropdown.Panel>
                        <TabDropdown.Panel title='Baked Rolls'>
                            <Appetizers></Appetizers>
                        </TabDropdown.Panel>
                        <TabDropdown.Panel title='Tempura Rolls'>
                            <Appetizers></Appetizers>
                        </TabDropdown.Panel>
                        <TabDropdown.Panel title='Lunch Specials'>
                            <Appetizers></Appetizers>
                        </TabDropdown.Panel>
                        <TabDropdown.Panel title='Donburi'>
                            <Appetizers></Appetizers>
                        </TabDropdown.Panel>
                        <TabDropdown.Panel title='Noodles'>
                            <Appetizers></Appetizers>
                        </TabDropdown.Panel>
                        <TabDropdown.Panel title='Kids Menu'>
                            <Appetizers></Appetizers>
                        </TabDropdown.Panel>
                        <TabDropdown.Panel title='Dessert'>
                            <Appetizers></Appetizers>
                        </TabDropdown.Panel>
                    </TabDropdown>
                </div>
            </div>

        );
    }
});