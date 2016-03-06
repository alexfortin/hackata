var React = require('react');
var Navbar = require("react-bootstrap/lib/Navbar");
var Nav = require("react-bootstrap/lib/Nav");
var NavItem = require("react-bootstrap/lib/NavItem");
var NavDropdown = require("react-bootstrap/lib/NavDropdown");
var MenuItem = require("react-bootstrap/lib/MenuItem");

module.exports= React.createClass({

    getInitialState: function() {
        return {expanded: false};
    },
    onNavItemClick: function() {
        this.setState({ expanded: false });

    },
    onNavbarToggle: function() {
        this.setState({ expanded: ! this.state.expanded });
    },

    render: function (){
        return (
            <Navbar fixedTop className="navbar-border" expanded={this.state.expanded}onToggle={ this.onNavbarToggle } >
                <Navbar.Header>
                    Hakata Sushi
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <MenuItem onClick={ this.onNavItemClick } eventKey={1} href="#menu-tab">MENU</MenuItem>
                        <MenuItem onClick={ this.onNavItemClick } eventKey={2} href="#location-info">LOCATION AND HOURS</MenuItem>
                        <MenuItem onClick={ this.onNavItemClick } eventKey={2} href="#contact-info">CONTACT</MenuItem>
                        <MenuItem onClick={ this.onNavItemClick } eventKey={2} href="#about-info">ABOUT</MenuItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
});
