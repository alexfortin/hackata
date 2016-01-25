var React = require('react');
var TabDropdown = require('./TabDropdown');
var Appetizers = require('./Appetizers');

module.exports =  React.createClass({
    render: function() {
        return (
            <TabDropdown tabActive={1}>
                <TabDropdown.Panel title='Appetizers'>
                    <Appetizers></Appetizers>
                    <Appetizers></Appetizers>
                </TabDropdown.Panel>
                <TabDropdown.Panel title='Rolls'>
                    <Appetizers></Appetizers>
                </TabDropdown.Panel>
                <TabDropdown.Panel title='Nagiri/Sashimi'>
                    <Appetizers></Appetizers>
                </TabDropdown.Panel>
                <TabDropdown.Panel title='Entrees'>
                    <Appetizers></Appetizers>
                </TabDropdown.Panel>
                <TabDropdown.Panel title='Specials'>
                    <Appetizers></Appetizers>
                </TabDropdown.Panel>
                <TabDropdown.Panel title='Deserts'>
                    <Appetizers></Appetizers>
                </TabDropdown.Panel>
            </TabDropdown>
        );
    }
});