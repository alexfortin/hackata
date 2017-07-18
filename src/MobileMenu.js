var React = require('react');
var TabDropdown = require('./TabDropdown');

module.exports =  React.createClass({
    render: function() {
        return (
            <div className="menu-wrapper">
                <span className="menu-title">MENU</span>
                <br></br>
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
                            <Sashimi></Sashimi>
                        </TabDropdown.Panel>
                        <TabDropdown.Panel title='Standard & Hand Rolls'>
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
                        {/*<TabDropdown.Panel title='Sushi Bar Lunch Specials'>*/}
                            {/*<SushiLunchSpecial></SushiLunchSpecial>*/}
                        {/*</TabDropdown.Panel>*/}
                        <TabDropdown.Panel title='Lunch Specials'>
                            <LunchSpecial></LunchSpecial>
                        </TabDropdown.Panel>
                        {/*<TabDropdown.Panel title='Donburi'>*/}
                            {/*<Donburi></Donburi>*/}
                        {/*</TabDropdown.Panel>*/}
                        <TabDropdown.Panel title='Noodles'>
                            <Noodles></Noodles>
                        </TabDropdown.Panel>
                        <TabDropdown.Panel title='Kids Entrees'>
                            <Kids></Kids>
                        </TabDropdown.Panel>
                        <TabDropdown.Panel title='Desserts'>
                            <Deserts></Deserts>
                        </TabDropdown.Panel>
                        <TabDropdown.Panel title='Drinks'>
                            <Drinks></Drinks>
                        </TabDropdown.Panel>
                    </TabDropdown>
                </div>
            </div>

        );
    }
});

var LunchSpecial = React.createClass({
    render: function() {
        return (
            <div className="menu">
                <div className="sub-menu-title">Roll Combinations</div>
                <p className="menu-item">
                    <span className="menu-item-name">One Roll Combination</span><span className="menu-price">6.50</span>
                    <span className="menu-item-description">One California roll (8pcs) and one house special roll (4pcs)</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Two Roll Combination</span><span className="menu-price">8.95</span>
                    <span className="menu-item-description">Two California roll (16pcs) and one house special roll (4pcs)</span>
                </p>
                <div className="list-container">
                    <div className="q-title-desc">*You may substitute a California roll for</div>
                    <li className="s-menu-item-description">Tuna or Salmon Avocado roll +$1</li>
                    <li className="s-menu-item-description">Spicy Tuna +$2</li>
                    <li className="s-menu-item-description">Salmon Roll +$2</li>
                    <li className="s-menu-item-description">Eel & Avocado roll +$2</li>
                    <li className="s-menu-item-description">Philly roll +$2</li>
                    <li className="s-menu-item-description">Shrimp Tempura roll or Spider roll +$3</li>
                    <li className="s-menu-item-description">Dragon roll, Rainbow roll, or Lion King roll +$4</li>
                </div>
                <div className="sub-menu-title">Sushi and Roll Combinations</div>
                <div className="combo-title-desc">5pcs Nigiri (White fish, Hamachi, Maguro, Tai, Sake) served with miso soup + 1 choice below</div>
                <p className="s-menu-item">
                    <span className="c-menu-item-name">California Roll</span><span className="r-menu-pcs">9.95</span>
                </p>
                <p className="s-menu-item">
                    <span className="c-menu-item-name">Tuna Roll</span><span className="r-menu-pcs">10.95</span>
                </p>
                <p className="s-menu-item">
                    <span className="c-menu-item-name">Salmon Avocado Roll</span><span className="r-menu-pcs">10.95</span>
                </p>
                <p className="s-menu-item">
                    <span className="c-menu-item-name">Spicy Tuna Roll</span><span className="r-menu-pcs">11.95</span>
                </p>
                <p className="s-menu-item">
                    <span className="c-menu-item-name">Spicy Salmon Roll</span><span className="r-menu-pcs">11.95</span>
                </p>
                <p className="s-menu-item">
                    <span className="c-menu-item-name">Eel & Avocado</span><span className="r-menu-pcs">11.95</span>
                </p>
                <p className="s-menu-item">
                    <span className="c-menu-item-name">Philly Roll</span><span className="r-menu-pcs">11.95</span>
                </p>
                <p className="s-menu-item">
                    <span className="c-menu-item-name">Rainbow Roll</span><span className="r-menu-pcs">12.95</span>
                </p>
                <p className="s-menu-item">
                    <span className="c-menu-item-name">Dragon Roll</span><span className="r-menu-pcs">12.95</span>
                </p>
                <br></br>
                <p className="r-menu-item">
                    <span className="menu-item-name">Sashimi Combo</span><span className="menu-price">15.95</span>
                    <span className="menu-item-description">9pcs of sashimi (tuna, salmon, white fish), salmon roll, and house special roll (4pcs)</span>
                </p>
                <br></br>
                <div className="sub-menu-title">Bento Box</div>
                <div className="combo-title-desc">Served with rice, house salad, miso soup, 2pcs of sushi, 4pcs of California roll, 1pc of gyoza, and an egg roll</div>
                <p className="menu-item">
                    <span className="menu-item-name">Chicken Teriyaki of Spicy Chicken</span><span className="menu-price">11.95</span>
                    <span className="menu-item-description">Grilled chicken with teriyaki sauce or spicy sauce</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Shrimp Teriyaki</span><span className="menu-price">12.95</span>
                    <span className="menu-item-description">Grilled shrimp with teriyaki sauce</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Salmon Teriyaki</span><span className="menu-price">12.95</span>
                    <span className="menu-item-description">Char rock broiled salmon seasoned with teriyaki sauce</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Bulgogi Beef</span><span className="menu-price">11.95</span>
                    <span className="menu-item-description">Marinated sliced rib-eye steak or pork with spicy sauce</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Spicy Pork</span><span className="menu-price">11.95</span>
                    <span className="menu-item-description">Pork with spicy sauce</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Shrimp & Vegetable Tempura</span><span className="menu-price">11.95</span>
                    <span className="menu-item-description">2pcs of shrimp and assorted vegetables in tempura</span>
                </p>
                <p className="r-menu-item">
                    <span className="menu-item-name">Yakisoba</span><span className="menu-price">7.95</span>
                    <span className="menu-item-description">Stir fried Japanese yakisoba noodles with assorted vegetables. You may add chicken for $2, beef for $3, and shrimp for $3</span>
                </p>
                <p className="r-menu-item">
                    <span className="menu-item-name">Unaju</span><span className="menu-price">17.95</span>
                    <span className="menu-item-description">Grilled eel over a bed of sushi rice</span>
                </p>
            </div>
        );
    }
});

var Kids = React.createClass({
    render: function() {
        return (
            <div className="menu">
                <p className="menu-item">
                    <span className="menu-item-name">Dino Nuggets</span><span className="menu-price">6.95</span>
                    <span className="menu-item-description">6 piece dino nuggets with fries, steamed rice, and an orange slice</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Fried Crab Sticks</span><span className="menu-price">6.95</span>
                    <span className="menu-item-description">4 piece battered and fried crab with fries, steamed rice, and an orange slice</span>
                </p>
            </div>
        );
    }
});

var Noodles = React.createClass({
    render: function() {
        return (
            <div className="menu">
                <p className="menu-item">
                    <span className="menu-item-name">Vegetable Udon</span><span className="menu-price">8.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Shrimp Udon</span><span className="menu-price">9.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Vegetable Yakisoba</span><span className="menu-price">8.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Chicken Yakisoba</span><span className="menu-price">9.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Beef Yakisoba</span><span className="menu-price">10.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Shrimp Yakisoba</span><span className="menu-price">10.95</span>
                </p>
            </div>
        );
    }
});

var SushiLunchSpecial = React.createClass({
    render: function() {
        return (
            <div className="menu">
                <div className="sub-menu-title">Sushi and Roll Combinations</div>
                <div className="combo-title-desc">5pcs Nigiri (White fish, Hamachi, Maguro, Tai, Sake) served with miso soup + 1 choice below</div>
                <p className="s-menu-item">
                    <span className="c-menu-item-name">California Roll</span><span className="r-menu-pcs">9.95</span>
                </p>
                <p className="s-menu-item">
                    <span className="c-menu-item-name">Tuna Roll</span><span className="r-menu-pcs">10.95</span>
                </p>
                <p className="s-menu-item">
                    <span className="c-menu-item-name">Salmon Avocado Roll</span><span className="r-menu-pcs">10.95</span>
                </p>
                <p className="s-menu-item">
                    <span className="c-menu-item-name">Spicy Tuna Roll</span><span className="r-menu-pcs">11.95</span>
                </p>
                <p className="s-menu-item">
                    <span className="c-menu-item-name">Spicy Salmon Roll</span><span className="r-menu-pcs">11.95</span>
                </p>
                <p className="s-menu-item">
                    <span className="c-menu-item-name">Eel & Avocado</span><span className="r-menu-pcs">11.95</span>
                </p>
                <p className="s-menu-item">
                    <span className="c-menu-item-name">Philly Roll</span><span className="r-menu-pcs">11.95</span>
                </p>
                <p className="s-menu-item">
                    <span className="c-menu-item-name">Rainbow Roll</span><span className="r-menu-pcs">12.95</span>
                </p>
                <p className="s-menu-item">
                    <span className="c-menu-item-name">Dragon Roll</span><span className="r-menu-pcs">12.95</span>
                </p>
                <br></br>
                <p className="r-menu-item">
                    <span className="menu-item-name">Sashimi Combo</span><span className="menu-price">15.95</span>
                    <span className="menu-item-description">9pcs of sashimi (tuna, salmon, white fish), salmon roll, and house special roll (4pcs)</span>
                </p>
                <br></br>
                <p className="r-menu-item">
                    <span className="menu-item-name">Unaju</span><span className="menu-price">17.95</span>
                    <span className="menu-item-description">Grilled eel over a bed of sushi rice</span>
                </p>
            </div>
        );
    }
});

var Donburi = React.createClass({
    render: function() {
        return (
            <div className="menu">
                <div className="combo-title-desc">Rice topped with egg, cabbage, onion, and scallion</div>
                <p className="menu-item">
                    <span className="menu-item-name">Katsudon (Deep Fried Pork or Chicken)</span><span className="menu-price">8.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Tendon (Deep Fried Shrimp)</span><span className="menu-price">10.95</span>
                </p>
            </div>
        );
    }
});

var Sashimi = React.createClass({
    render: function() {
        return (
            <div className="menu">
                <p className="s-menu-item">
                    <span className="s-menu-item-name"></span><span className="menu-pcs">5pcs</span><span className="menu-pcs">9pcs</span>
                </p>
                <p className="s-menu-item">
                    <span className="s-menu-item-name">Maguro (Tuna Big Eye)</span><span className="menu-pcs">10.95</span><span className="menu-pcs">-</span>
                </p>
                <p className="s-menu-item">
                    <span className="s-menu-item-name">Sake (Salmon)</span><span className="menu-pcs">10.95</span><span className="menu-pcs">-</span>
                </p>
                <p className="s-menu-item">
                    <span className="s-menu-item-name">Escolar (Super White Tuna)</span><span className="menu-pcs">10.95</span><span className="menu-pcs">-</span>
                </p>
                <p className="s-menu-item">
                    <span className="s-menu-item-name">Hamachi (Yellow Tail)</span><span className="menu-pcs">11.95</span><span className="menu-pcs">-</span>
                </p>
                <p className="s-menu-item">
                    <span className="s-menu-item-name">Mixed Trio (Choice of 3)</span><span className="menu-pcs">-</span><span className="menu-pcs">20.95</span>
                </p>
                <div className="sub-menu-title">Mixed Sushi/Sashimi Platters</div>
                <p className="s-menu-item">
                    <span className="s-menu-item-name">7 Sushi & 9 Sashimi</span><span className="c-menu-pcs">30.95</span>
                </p>
                <p className="s-menu-item">
                    <span className="s-menu-item-name">10 Sushi & 16 Sashimi</span><span className="c-menu-pcs">48.95</span>
                </p>
                <p className="s-menu-item">
                    <span className="s-menu-item-name">14 Pieces of Sushi</span><span className="c-menu-pcs">26.95</span>
                </p>
                <p className="s-menu-item">
                    <span className="s-menu-item-name">20 Pieces of Sashimi</span><span className="c-menu-pcs">35.95</span>
                </p>
                <p className="s-menu-item">
                    <span className="s-menu-item-name">30 Pieces of Sashimi</span><span className="c-menu-pcs">54.95</span>
                </p>
                <div className="sub-menu-title">Sushi Combo (Chefs Choice)</div>
                <p className="s-menu-item">
                    <span className="s-menu-item-name">5pcs Sushi & California Roll</span><span className="c-menu-pcs">11.95</span>
                </p>
                <p className="s-menu-item">
                    <span className="s-menu-item-name">5pcs Sushi & Spicy Tuna or Spice Salmon</span><span className="c-menu-pcs">13.95</span>
                </p>
                <p className="s-menu-item">
                    <span className="s-menu-item-name">7pcs Sushi & California Roll</span><span className="c-menu-pcs">14.95</span>
                </p>
                <p className="s-menu-item">
                    <span className="s-menu-item-name">7pcs Sushi & Spicy Tuna or Spicy Salmon</span><span className="c-menu-pcs">16.95</span>
                </p>
                <p className="s-menu-item">
                    <span className="s-menu-item-name">9pcs Sushi & California Roll</span><span className="c-menu-pcs">17.95</span>
                </p>
                <p className="s-menu-item">
                    <span className="s-menu-item-name">9pcs Sushi & Spicy Tuna or Spicy Salmon</span><span className="c-menu-pcs">19.95</span>
                </p>
            </div>
        );
    }
});

var Drinks = React.createClass({
    render: function() {
        return (
            <div className="menu">
                <p className="menu-item">
                    <span className="menu-item-name">Soda</span><span className="menu-price">1.75</span>
                    <span className="menu-item-description">Coke, Diet Coke, Sprite, Dr. Pepper, A&W Root Beer, Minute Maid Lemonade</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Iced Tea</span><span className="menu-price">1.75</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Hot Tea</span><span className="menu-price">2.25</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Juice</span><span className="menu-price">2.50</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Ramune</span><span className="menu-price">2.50</span>
                    <span className="menu-item-description">Original flavoured Japanese soda</span>
                </p>
            </div>
        );
    }
});

var Deserts = React.createClass({
    render: function() {
        return (
            <div className="menu">
                <p className="menu-item">
                    <span className="menu-item-name">Mochi Ice Cream</span><span className="menu-price">3.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Tempura Ice Cream</span><span className="menu-price">5.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Chocolate Cheesecake</span><span className="menu-price">4.95</span>
                </p>
            </div>
        );
    }
});

var TempuraRoll = React.createClass({
    render: function() {
        return (
            <div className="menu">
                <p className="menu-item">
                    <span className="menu-item-name">Texas Roll</span><span className="menu-price">10.95</span>
                    <span className="menu-item-description">Yellowtail, spicy salmon, jalepeno, avocado, cheese and deep fried</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Out of Control Roll</span><span className="menu-price">11.95</span>
                    <span className="menu-item-description">Shrimp tempura, avocado, and tuna topped with spicy shrimp</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Sunny Roll</span><span className="menu-price">11.95</span>
                    <span className="menu-item-description">Shrimp tempura, spicy tuna, cucumber, tuna, and tobiko</span>
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
                    <span className="menu-item-description">Crunch batter, crab, shrimp, avocado, eel sauce, and honey wasabi</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Play Boy Roll</span><span className="menu-price">10.95</span>
                    <span className="menu-item-description">Shrimp tempura, avocado, crab topped with tuna</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Play Girl Roll</span><span className="menu-price">10.95</span>
                    <span className="menu-item-description">Shrimp tempura, avocado, crab topped with salmon</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Kiss of Fire</span><span className="menu-price">11.95</span>
                    <span className="menu-item-description">Shrimp tempura, spicy tuna, jalepeno topped with torched escolar, green onions, and masago</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Red Devil Roll</span><span className="menu-price">10.95</span>
                    <span className="menu-item-description">Shrimp tempura, cream cheese, avocado with kanikama</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Shrimp Killer Roll</span><span className="menu-price">10.95</span>
                    <span className="menu-item-description">Shrimp tempura, crab, and avocado topped with shrimp</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Texas Ranger's Roll</span><span className="menu-price">10.95</span>
                    <span className="menu-item-description">Shrimp tempura, crab, avocado topped with torched scallop</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Black Dragon Roll</span><span className="menu-price">10.95</span>
                    <span className="menu-item-description">Fried shrimp, asparagus, cream cheese topped with eel</span>
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
                    <span className="menu-item-description">Crab, cream cheese, avocado topped with baked salmon</span>
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
                    <span className="menu-item-description">California roll topped with scorched scallop and masago</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Snow Cone Roll</span><span className="menu-price">10.95</span>
                    <span className="menu-item-description">Crab, alvocado, cream cheese topped with baked red snapper</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Dynamite Roll</span><span className="menu-price">11.95</span>
                    <span className="menu-item-description">Salmon tempura, crab, avocado with baked spicy salmon and masago</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Spicy Crawfish Roll</span><span className="menu-price">10.95</span>
                    <span className="menu-item-description">Crab, jalepeno, avocado topped with spicy baked crawfish and spicy sauce</span>
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
                    <span className="menu-item-description">Ralmon, avocado, crab, topped with tuna and tobiko</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Super Philly Roll</span><span className="menu-price">11.95</span>
                    <span className="menu-item-description">Smoked salmon, cream cheese, avocado, topped with salmon and crunch</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Lone Star Roll</span><span className="menu-price">11.95</span>
                    <span className="menu-item-description">Salmon, tuna, yellowtail, escolar, avocado, and tobiko</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Spicy Crunch Roll</span><span className="menu-price">7.95</span>
                    <span className="menu-item-description">Crab, avocado, jalepeno, cream cheese with crunch</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Pflugerville Roll</span><span className="menu-price">10.95</span>
                    <span className="menu-item-description">Spicy scallop, cucumber, topped with salmon and avocado</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Austin Roll</span><span className="menu-price">10.95</span>
                    <span className="menu-item-description">Spice salmon, escolar, red snapper, jalepeno, lemon topped with  kani</span>
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
                    <span className="menu-item-name">White Blanco</span><span className="menu-price">11.95</span>
                    <span className="menu-item-description">Salmon, crab, avocado topped with escolar and tobiko</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Paradise Roll</span><span className="menu-price">11.95</span>
                    <span className="menu-item-description">Tuna, cucmber, kani, topped with salmon and tobiko</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Kazy Roll</span><span className="menu-price">11.95</span>
                    <span className="menu-item-description">Eel, avocado, topped with tuna, black tobiko, and eel sauce</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Cheviche Roll</span><span className="menu-price">11.95</span>
                    <span className="menu-item-description">Tuna, salmon, red snapper, spicy cocktail sauce, cilantro, jalapeno topped with salmon masago and spicy mayo</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Spicy Tuna Tataki Roll</span><span className="menu-price">11.95</span>
                    <span className="menu-item-description">Spicy tuna and cucumber topped with tuna tataki, masago, and green onions</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Spicy Salmon Tataki Roll</span><span className="menu-price">11.95</span>
                    <span className="menu-item-description">Spicy salmon, cucumber, avocado topped with salmon tataki, crunch, and masago</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">911 Roll</span><span className="menu-price">9.95</span>
                    <span className="menu-item-description">Salmon, tuna, yellow tail, avocado, jalepeno topped with  kani</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Orgasm Roll</span><span className="menu-price">10.95</span>
                    <span className="menu-item-description">Shrimp, avocado, cucumber with spicy shrimp and crunch</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Lion King Roll</span><span className="menu-price">10.95</span>
                    <span className="menu-item-description">Spicy crab, avocado topped with torched salmon and onion crunch</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Black Hole Roll</span><span className="menu-price">11.95</span>
                    <span className="menu-item-description">Tuna, salmon, cucumber, and avocado topped with eel</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Volcano Roll</span><span className="menu-price">10.95</span>
                    <span className="menu-item-description">Spicy tuna and cucumber topped with chopped avocado and crunch</span>
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
                    <span className="menu-item-description">Char rock broiled rib eye steak with teriyaki sauce</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Chicken Teriyaki</span><span className="menu-price">12.95</span>
                    <span className="menu-item-description">Grilled chicken with teriyaki or spicy sauce</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Salmon Teriyaki</span><span className="menu-price">13.95</span>
                    <span className="menu-item-description">Char rock broiled and seasoned with teriyaki sauce</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Sesame Chicken</span><span className="menu-price">10.95</span>
                    <span className="menu-item-description">Fried chicken with sesame sauce</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">General Tso's Chicken</span><span className="menu-price">10.95</span>
                    <span className="menu-item-description">Fried chicken with housemade General Tso's sauce</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Tempura Dinner</span><span className="menu-price">13.95</span>
                    <span className="menu-item-description">Delectable 6 pieces of tempora shrimp with assorted vegetables</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Don Katsu</span><span className="menu-price">12.95</span>
                    <span className="menu-item-description">Breaded, deep fried pork served with housemade katsu sauce</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Chicken Katsu</span><span className="menu-price">12.95</span>
                    <span className="menu-item-description">Breaded, deep fried chicken served with housemade katsu sauce</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Katsudon</span><span className="menu-price">10.95</span>
                    <span className="menu-item-description">A bowl of rice topped with a deep-fried pork or chicken cutlet. Egg, cabbage, onion, and scallion are simmered together in a sauce and added on top</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Ebi Don</span><span className="menu-price">10.95</span>
                    <span className="menu-item-description">A bowl of rice topped with deep-fried prawn. Egg, cabbage, onion, and scallion are simmered together in a sauce and added on top</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Squid Bokkeum</span><span className="menu-price">12.95</span>
                    <span className="menu-item-description">Stir-fried squid with seasonal vegetables in spicy sauce. Served with steamed rice</span>
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
                    <span className="menu-item-name">Salmon Tempura Roll (6 pcs)</span><span className="menu-price">7.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Shrimp Tempura Roll (6 pcs)</span><span className="menu-price">8.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Spider Roll (6 pcs)</span><span className="menu-price">9.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Catepillar Roll (8 pcs)</span><span className="menu-price">10.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">House Special Roll (6 pcs)</span><span className="menu-price">7.95</span>
                    <span className="menu-item-description">Spicy crab, avocado, cream cheese, and deep fried</span>
                </p
                ><p className="menu-item">
                    <span className="menu-item-name">Veggie Tempura Roll (6 pcs)</span><span className="menu-price">5.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Vegetable Roll (6 pcs)</span><span className="menu-price">4.95</span>
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
                    <span className="menu-item-name">Escolar</span><span className="menu-price">4.95</span>
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
                    <span className="menu-item-name">Honkani (Fresh Clam)</span><span className="menu-price">4.95</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Tako (Octopus)</span><span className="menu-price">4.75</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Hokkigai (Surf Clam)</span><span className="menu-price">4.75</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Tamago (Sweet Egg)</span><span className="menu-price">3.50</span>
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
                    <span className="menu-item-name">Amaebi (Sweet Shrimp)</span><span className="menu-price">8.95</span>
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
                    <span className="menu-item-description">Lightly salted boiled soybeans</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Vegetable Tempura</span><span className="menu-price">5.95</span>
                    <span className="menu-item-description">Assorted vegetables fried in tempura batter</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Spicy Edamame</span><span className="menu-price">4.95</span>
                    <span className="menu-item-description">Edamame skillet-fried in spicy sauce</span>
                <p className="menu-item">
                    <span className="menu-item-name">Shrimp & Veggie Tempura</span><span className="menu-price">8.95</span>
                    <span className="menu-item-description">2 shrimp and vegetable tempura</span>
                </p>                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Gyoza</span><span className="menu-price">3.95</span>
                    <span className="menu-item-description">Fried pork dumplings 6pcs</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Shrimp Tempura</span><span className="menu-price">9.95</span>
                    <span className="menu-item-description">8 pieces of shrimp fried in tempura batter</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Spicy Gyoza</span><span className="menu-price">4.95</span>
                    <span className="menu-item-description">Gyoza skillet-fried in spicy sauce</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Soft Shell Crab </span><span className="menu-price">7.95</span>
                    <span className="menu-item-description">Crispy, deep-fried crab</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Seaweed Salad</span><span className="menu-price">4.95</span>
                    <span className="menu-item-description">Marinated and seasoned seaweed</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Heart Attack</span><span className="menu-price">7.95</span>
                    <span className="menu-item-description">Stuffed jalapeno with spicy crab and cheese</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Squid Salad</span><span className="menu-price">5.95</span>
                    <span className="menu-item-description">Marinated squid</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Vegetable Egg Rolls</span><span className="menu-price">2.25</span>
                    <span className="menu-item-description"> 2 Fried vegetable egg rolls</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Calamari Tempura</span><span className="menu-price">5.95</span>
                    <span className="menu-item-description">Squid circles fried in tempura batter</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Shrimp Shumai</span><span className="menu-price">4.95</span>
                    <span className="menu-item-description">Fried shrimp dumplings</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Spicy Popcorn Shrimp</span><span className="menu-price">6.95</span>
                    <span className="menu-item-description">Fried shrimp with spicy sauce</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Fish Fillets</span><span className="menu-price">7.95</span>
                    <span className="menu-item-description">Fried fish with homemade tartar sauce</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Tempura Oyster</span><span className="menu-price">6.50</span>
                    <span className="menu-item-description">Oysters fried in tempura batter</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">House Salad</span><span className="menu-price">2.50</span>
                    <span className="menu-item-description">Mixed salad with our housemade ginger dressing</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">KaniSunomono</span><span className="menu-price">5.95</span>
                    <span className="menu-item-description">Crab cucumber salad</span>
                </p>
                <p className="menu-item">
                    <span className="menu-item-name">Miso Soup</span><span className="menu-price">1.75</span>
                    <span className="menu-item-description">Classic miso soup</span>
                </p>
                <p className="appetizer-footer"><b>-The sauces used in your favorite foods are made right here in our restaurant-</b></p>
            </div>
        );
    }
});
