var React = require('react');
var TabDropdown = require('./TabDropdown');

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
                            <Entrees></Entrees>
                        </TabDropdown.Panel>
                        <TabDropdown.Panel title='Hakata Sushi (Nigiri 2pcs)'>
                            <HakataSushi></HakataSushi>
                        </TabDropdown.Panel>
                        <TabDropdown.Panel title='Sashimi'>
                            <Appetizers></Appetizers>
                        </TabDropdown.Panel>
                        <TabDropdown.Panel title='Standard Rolls & Hand Rolls'>
                            <StandardRolls></StandardRolls>
                        </TabDropdown.Panel>
                        <TabDropdown.Panel title='Fresh Rolls (8pcs)'>
                            <FreshRolls></FreshRolls>
                        </TabDropdown.Panel>
                        <TabDropdown.Panel title='Baked Rolls (8pcs)'>
                            <BakedRolls></BakedRolls>
                        </TabDropdown.Panel>
                        <TabDropdown.Panel title='Tempura Rolls (8-10pcs)'>
                            <TempuraRoll></TempuraRoll>
                        </TabDropdown.Panel>
                    </TabDropdown>
                </div>
            </div>

        );
    }
});

var TempuraRoll = React.createClass({
    render: function() {
        return (
            <div className="menu">
                <p className="menu-item">
                    <span className="menu-item-name">Texas Roll</span><span className="menu-price">9.95</span>
                    <span className="menu-item-description">Spicy yellow tail, salmon, jalepeno, and avocado deep fried</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Out of Control Roll</span><span className="menu-price">11.95</span>
                    <span className="menu-item-description">Shrimp tempura, avocado, and tuna topped with spicy shrimp</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Sunny Roll</span><span className="menu-price">11.95</span>
                    <span className="menu-item-description">Shrimp tempura, spicy tuna, cucumber, tuna, and caviar</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Las Vegas Roll</span><span className="menu-price">10.95</span>
                    <span className="menu-item-description">Eel, smoked salmon, crab, cream cheese, avocado deep fried</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Energy Roll</span><span className="menu-price">10.95</span>
                    <span className="menu-item-description">Eel, tuna, avocado, cream cheese deep fried</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Hot Night Roll</span><span className="menu-price">10.95</span>
                    <span className="menu-item-description">Shrimp Tempura, avocado topped with spicy tuna and scallion</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">No Name Roll</span><span className="menu-price">9.95</span>
                    <span className="menu-item-description">Tuna, salmon, white tuna, cream cheese deep fried</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Crunch Shrimp Roll</span><span className="menu-price">8.95</span>
                    <span className="menu-item-description">Crunch batter, crab, shrimp, and avocado</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Play Boy Roll</span><span className="menu-price">10.95</span>
                    <span className="menu-item-description">Shrimp tempura, avocado, crab, and tuna</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Play Girl Roll</span><span className="menu-price">10.95</span>
                    <span className="menu-item-description">Shrimp tempura, avocado, crab, and salmon</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Kiss of Fire</span><span className="menu-price">11.95</span>
                    <span className="menu-item-description">Shrimp tempura, spicy tuna, jalepeno, and torched escolar</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Red Devil Roll</span><span className="menu-price">10.95</span>
                    <span className="menu-item-description">Shrimp tempura, cream cheese, avocado, and kanikama</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Shrimp Killer Roll</span><span className="menu-price">10.95</span>
                    <span className="menu-item-description">Shrimp tempura, crab, and avocado topped with shrimp</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Texas Ranger's Roll</span><span className="menu-price">10.95</span>
                    <span className="menu-item-description">Shrimp tempura, crab, avocado, and torched scallop</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Dinosaur Roll</span><span className="menu-price">12.95</span>
                    <span className="menu-item-description">Shrimp tempura, jalepeno, avocado, eel, and masago</span>
                </p>
            </div>
        );
    }
});

var BakedRolls = React.createClass({
    render: function() {
        return (
            <div className="menu">
                <p className="menu-item">
                    <span className="menu-item-name">Baked Salmon Roll</span><span className="menu-price">10.95</span>
                    <span className="menu-item-description">Crab, cream cheese, avocado topped with salmon</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Razzle Dazzle Roll</span><span className="menu-price">10.95</span>
                    <span className="menu-item-description">Shrimp tempura and avocado</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Dragon Roll</span><span className="menu-price">10.95</span>
                    <span className="menu-item-description">California topped with eel and alvocado</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Fire Scallop Roll</span><span className="menu-price">11.95</span>
                    <span className="menu-item-description">California roll topped with baked scallop</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Snow Cone Roll</span><span className="menu-price">10.95</span>
                    <span className="menu-item-description">Crab, alvocado topped with baked red snapper</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Dynamite Roll</span><span className="menu-price">10.95</span>
                    <span className="menu-item-description">Salmon tempura, crab, avocado with baked spicy salmon</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Spicy Crawfish Roll</span><span className="menu-price">10.95</span>
                    <span className="menu-item-description">Baked crawfish, jalepeno on California roll and spicy sauce</span>
                </p>
            </div>
        );
    }
});

var FreshRolls = React.createClass({
    render: function() {
        return (
            <div className="menu">
                <p className="menu-item">
                    <span className="menu-item-name">Rainbow Roll</span><span className="menu-price">11.95</span>
                    <span className="menu-item-description">Five assorted fish covering California roll</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Cherry Blossom</span><span className="menu-price">11.95</span>
                    <span className="menu-item-description">Ralmon, avocado, crab, topped with tuna and caviar</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Pflugerville Roll</span><span className="menu-price">9.95</span>
                    <span className="menu-item-description">Spicy scallop, cucumber, topped with salmon</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Super Philly Roll</span><span className="menu-price">9.95</span>
                    <span className="menu-item-description">Smoked salmon, cream cheese, avocado, and salmon with crunch</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Lone Star Roll</span><span className="menu-price">10.95</span>
                    <span className="menu-item-description">Salmon, tuna, yellow tail, white tuna, avocado, and caviar</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Spicy Crunch Roll</span><span className="menu-price">7.95</span>
                    <span className="menu-item-description">Crab, avocado, jalepeno, cream cheese, with crunch</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Austin Roll</span><span className="menu-price">9.95</span>
                    <span className="menu-item-description">Spice salmon, escolar, red snapper, jalepeno, lemon, and kani</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Spring Roll</span><span className="menu-price">9.95</span>
                    <span className="menu-item-description">California roll topped with spicy tuna and green onion</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Rising Sun Roll</span><span className="menu-price">9.95</span>
                    <span className="menu-item-description">California roll topped with tuna</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">White Blanco</span><span className="menu-price">10.95</span>
                    <span className="menu-item-description">Salmon, crab, avocado topped with escolar</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Titanic Roll</span><span className="menu-price">10.95</span>
                    <span className="menu-item-description">Spicy tuna, cucumber, salmon, and caviar</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Spicy Tuna Tataki Roll</span><span className="menu-price">11.95</span>
                    <span className="menu-item-description">Spicy tuna topped with tuna tataki and masago</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">911 Roll</span><span className="menu-price">9.95</span>
                    <span className="menu-item-description">Salmon, tuna, yellow tail, avocado, jalepeno, and kani</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Hakata Roll</span><span className="menu-price">10.95</span>
                    <span className="menu-item-description">Tuna, salmon, pineapple, cucumber, and kani</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Orgasm Roll</span><span className="menu-price">10.95</span>
                    <span className="menu-item-description">Shrimp, avocado, cucumber with spicy shrimp and crunch</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Lion King Roll</span><span className="menu-price">10.95</span>
                    <span className="menu-item-description">California roll topped with torched salmon</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Black Hole Roll</span><span className="menu-price">11.95</span>
                    <span className="menu-item-description">Half tuna half salmon, cucumber, and avocado topped with eel</span>
                </p>
            </div>
        );
    }
});

var Entrees = React.createClass({
    render: function() {
        return (
            <div className="menu">
                <div className="menu-title-desc">Teriyaki and BBQ selection are served on a hot plate and each entree is served with miso soup, house salad, and steam rice</div>
                <p className="menu-item">
                    <span className="menu-item-name">Prime Beef Teriyaki </span><span className="menu-price">15.95</span>
                    <span className="menu-item-description">Char rocb broiled rib eye steak with teriyaki sauce</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Chicken Teriyaki or Spicy Chicken</span><span className="menu-price">12.95</span>
                    <span className="menu-item-description">Grilled chicken with teriyaki or spicy sauce</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Salmon or Shrimp Teriyaki</span><span className="menu-price">13.95</span>
                    <span className="menu-item-description">Char rock broiled and seasoned with teriyaki sauce</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Beef Korean BBQ</span><span className="menu-price">15.95</span>
                    <span className="menu-item-description">Char rock broiled beef short-rib bbq marinated in sauce</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Bulgogi (Beef or Spicy Pork)</span><span className="menu-price">12.95</span>
                    <span className="menu-item-description">Marinated thin sliced rib-eye steak or with spicy sauce</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Spicy Squid</span><span className="menu-price">12.95</span>
                    <span className="menu-item-description">Stir-fried squid with vegetables in a spicy sauce</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Tempura Dinner</span><span className="menu-price">13.95</span>
                    <span className="menu-item-description">Delectable 6 pieces of tempora shrimp with assorted vegetables</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Don Katsu (Pork or Chicken)</span><span className="menu-price">12.95</span>
                    <span className="menu-item-description">Breaded, deep fried pork or chicken served with katsu sauce</span>
                </p>
            </div>
        );
    }
});


var StandardRolls = React.createClass({
    render: function() {
        return (
            <div className="menu">
                <p className="menu-item">
                    <span className="menu-item-name">California Roll (8 pcs)</span><span className="menu-price">4.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Tuna Roll (6 pcs)</span><span className="menu-price">5.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Salmon Avocado Roll (8 pcs)</span><span className="menu-price">5.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Yellow Tail Roll (6 pcs)</span><span className="menu-price">6.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Philly Roll (8 pcs)</span><span className="menu-price">6.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Crazy Boy Roll (10 pcs)</span><span className="menu-price">7.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Eel & Avocado Roll (8 pcs)</span><span className="menu-price">6.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Spicy Tuna Roll (8 pcs)</span><span className="menu-price">6.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Spicy Scallop Roll (8 pcs)</span><span className="menu-price">6.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Spicy Salmon Roll (8 pcs)</span><span className="menu-price">6.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Spicy Crab Roll (8 pcs)</span><span className="menu-price">6.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Salmon Skin Roll (8pcs)</span><span className="menu-price">5.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Chicken Tempura Roll (6 pcs)</span><span className="menu-price">7.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Salmon Tempura Roll (6 pcs)</span><span className="menu-price">7.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Shrimp Tempura Roll (6 pcs)</span><span className="menu-price">8.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Spider Roll (6 pcs)</span><span className="menu-price">9.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Gibbisan Roll (8 pcs)</span><span className="menu-price">9.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Catapillar Roll (8 pcs)</span><span className="menu-price">10.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">House Special Roll (6 pcs)</span><span className="menu-price">7.95</span>
                    <span className="menu-item-description">Spicy crab, alvocado, cream cheese, and deep fried</span>
                </p
                ><p className="menu-item">
                    <span className="menu-item-name">Veggie Tempura Roll (6 pcs)</span><span className="menu-price">5.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Vegatable Roll (6 pcs)</span><span className="menu-price">4.95</span>
                    <span className="menu-item-description">Radish, cucumber, avocado, carrot, gourd, and burndock</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Cucumber or Avocado Roll (6 pcs)</span><span className="menu-price">3.95</span>
                </p>
            </div>
        );
    }
});

var HakataSushi = React.createClass({
    render: function() {
        return (
            <div className="menu">
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

var Appetizers = React.createClass({
    render: function() {
        return (
            <div className="menu">
                <p className="menu-item">
                    <span className="menu-item-name">Edamame </span><span className="menu-price">3.95</span>
                    <span className="menu-item-description">Steamed young soy beans</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Egg Rolls</span><span className="menu-price">1.95</span>
                    <span className="menu-item-description">Fried vegetable egg rolls</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Gyoza</span><span className="menu-price">3.95</span>
                    <span className="menu-item-description">Fried pork dumplings 6pcs</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Spicy Gyoza</span><span className="menu-price">5.25</span>
                    <span className="menu-item-description">Gyoza seasoned with spicy sauce 6pcs</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Calamari Tempura</span><span className="menu-price">5.25</span>
                    <span className="menu-item-description">Deep fried squid</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Vegetable Tempura</span><span className="menu-price">5.25</span>
                    <span className="menu-item-description">Deep friend mixed vegetables</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Shrimp & Veg. Tempura</span><span className="menu-price">5.95</span>
                    <span className="menu-item-description">2pcs of shrimp and mixed vegetables</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Shrimp Tempura</span><span className="menu-price">7.95</span>
                    <span className="menu-item-description">8pcs of Shrimp</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Shumai</span><span className="menu-price">4.95</span>
                    <span className="menu-item-description">4pcs of deep fried shrimp dumplings</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Soft Shell Crab </span><span className="menu-price">7.95</span>
                    <span className="menu-item-description">Crispy deep friend crab from Chesapeake Bay</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Heart Attack</span><span className="menu-price">6.95</span>
                    <span className="menu-item-description">Stuffed jalapeno with spicy tuna and cheese</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Stuffed Avocado</span><span className="menu-price">7.95</span>
                    <span className="menu-item-description">Avocado stuffed with spicy crab and shrimp with cheese</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">House Salad</span><span className="menu-price">2.50</span>
                    <span className="menu-item-description">Salad with homemade ginger dressing</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Seaweed Salad</span><span className="menu-price">4.95</span>
                    <span className="menu-item-description">Marinated seaweed</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Squid (Ika) Salad</span><span className="menu-price">5.95</span>
                    <span className="menu-item-description">Marinated Calamari</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Sunomono</span><span className="menu-price">3.95</span>
                    <span className="menu-item-description">Cucumber Salad</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">KaniSunomono</span><span className="menu-price">5.95</span>
                    <span className="menu-item-description">Crab and Cucumber Salad</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Spicy Crab Muscle</span><span className="menu-price">5.95</span>
                    <span className="menu-item-description">4pcs of chopped and baked muscle </span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Spicy Red Snapper Salad</span><span className="menu-price">7.95</span>
                    <span className="menu-item-description">Salad with 8pcs of red snapper</span>
                </p>
            </div>
        );
    }
});