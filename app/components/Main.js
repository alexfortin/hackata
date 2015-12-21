// import { GoogleMapLoader, GoogleMap, Marker, SearchBox } from "react-google-maps";
// import {default as FaSpinner} from "react-icons/lib/fa/spinner";
// import {default as ScriptjsLoader} from "react-google-maps/lib/async/ScriptjsLoader";
import './main.css';

var React = require('react'),
 Sticky = require('react-sticky');
var ReactDom = require('react-dom')
var Tabs = require('react-simpletabs');

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
        <Tabs.Panel title='Tab #1'>
          <Lunch></Lunch>
        </Tabs.Panel>
        <Tabs.Panel title='Tab #2'>
        <Lunch></Lunch>
        </Tabs.Panel>
        <Tabs.Panel title='Tab #3'>
        <Lunch></Lunch>
        </Tabs.Panel>
        <Tabs.Panel title='Tab #1'>
          <Lunch></Lunch>
        </Tabs.Panel>
        <Tabs.Panel title='Tab #2'>
        <Lunch></Lunch>
        </Tabs.Panel>
        <Tabs.Panel title='Tab #3'>
        <Lunch></Lunch>
        </Tabs.Panel>
      </Tabs>
    );
  }
});


var NavBar = React.createClass({
  render: function (){
    return(
      <Sticky stickyStyle={stickyStyle}>
        <div>
          <div id="targets">
            <div id="target-menu">
                <a href="#tab">Menu</a>
            </div>
            <div id="target-contact">
                <a href="#contact-info">Contact</a>
            </div>
          </div>
        </div>
    </Sticky>
    )
  }
});

var stickyStyle = {
  position: 'fixed',
  backgroundColor: 'white',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  lineHeight: '24px',
  color: '#111',
  textDecoration: 'none',
  top: '0px',
  left: '0px',
  right: '0px',
  display: 'block',
  zIndex: '1'
};

var Header = React.createClass({
  render: function (){
    return (
      <div>
          <img src="../sushi_m.png"/>
      </div>
    )
  }
});

var Menu = React.createClass({
  render: function (){
    return (
      <div className="menu-wrapper">
        <div id="background-menu"></div>
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

var Contact = React.createClass({
  render: function (){
    return (
      <div className="menu">
        <p><strong>Contact</strong></p>
        <p>Hackata Sushi</p>
        <p>Phone: (512) 670-2480</p>

      </div>
    )
  }
});

// var Map = React.createClass({
//   render: function () {
//     return (
//       // <ScriptjsLoader
      //   hostname={"maps.googleapis.com"}
      //   pathname={"/maps/api/js"}
      //   query={{v: `3.${ AsyncGettingStarted.version }`, libraries: "geometry,drawing,places"}}
      //   loadingElement={
      //   <div>
      //   <FaSpinner />
      //   </div>
      //   }
      //   containerElement={
      //   <div />
      //   }
      //   googleMapElement={
      //   <GoogleMap
      //   defaultZoom={3}
      //   defaultCenter={{lat: -25.363882, lng: 131.044922}}
      //   >
      //   </GoogleMap>
      //   }
      // />
      // <GoogleMapLoader
      //   containerElement={
      //     <div
      //       style={{
      //         height: "100%",
      //       }}
      //     />
      //   }
      //   googleMapElement={
      //     <GoogleMap
      //       ref={(map) => console.log(map)}
      //       defaultZoom={3}
      //       defaultCenter={{lat: -25.363882, lng: 131.044922}}>
      //     </GoogleMap>
        // }
      // />
//     )
//   }
// })


ReactDom.render(<NavBar />, document.getElementById('navbar'));
ReactDom.render(<Header />, document.getElementById('header'));
// ReactDom.render(<Lunch />, document.getElementById('lunch'));
ReactDom.render(<Menu />, document.getElementById('tab'));
// ReactDom.render(<Dinner />, document.getElementById('dinner'));
ReactDom.render(<Contact />, document.getElementById('contact-info'));
// ReactDom.render(<Map />, document.getElementById('map'));
