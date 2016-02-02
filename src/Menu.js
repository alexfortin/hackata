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
                <Tabs.Panel title='Hakata Sushi'>
                    <HakataSushi></HakataSushi>
                </Tabs.Panel>
            </Tabs>
        );
    }
});

var HakataSushi = React.createClass({
    render: function() {
        return (
            <div className="menu">
                <p className="menu-header">
                    <span>Nigiri (2 Pieces) </span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Maguro (Big-eye Tuna) </span><span className="menu-price">4.75</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Toro (Fatty Tuna)</span><span className="menu-price">11.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Sake (Salmon)</span><span className="menu-price">4.50</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Torched Escolar</span><span className="menu-price">4.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Bincho (Albacore)</span><span className="menu-price">4.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Tai (Red Snapper)</span><span className="menu-price">4.50</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Hamachi (Yellow Tail)</span><span className="menu-price">4.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Ikura (Salmon Roe)</span><span className="menu-price">4.75</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Ebi (Shrimp)</span><span className="menu-price">4.50</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Kani (Imitation Crab)</span><span className="menu-price">3.75</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Ika (Squid)</span><span className="menu-price">4.50</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Unagi (Fresh Water Eel)</span><span className="menu-price">4.75</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Masago (Smelt Roe)</span><span className="menu-price">4.25</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Saba (Mackerel)</span><span className="menu-price">4.50</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Smoked Salmon</span><span className="menu-price">4.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Honkani (Fresh Clam)</span><span className="menu-price">4.75</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Tako (Octopus)</span><span className="menu-price">4.75</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Hokkigai (Surf Clam)</span><span className="menu-price">4.75</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Tomago (Sweet Egg)</span><span className="menu-price">3.50</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Tobiko (Flying Fish Roe)</span><span className="menu-price">4.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Seared Scallop</span><span className="menu-price">5.25</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Spicy Scallop</span><span className="menu-price">4.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Amaiebi (Sweet Shrimp)</span><span className="menu-price">8.95</span>
                </p>
            </div>
        );
    }
});
