import React, { useContext } from 'react';


import Header from './header/header.jsx';
import Navigation from './nav/nav.jsx';
import Assortment from './assortment/assortment.jsx';
import Product from './product/product.jsx';
import MenuContext from './context.js';
import menu from './menu.js';


const App = () => 
  (<div>
    <Header />
    <MenuContext.Provider value={menu}> 
      <Navigation />
      <Assortment>
        {products => products.map((product, index) => 
          <Product key={index} {...product} />
        )}
      </Assortment>
    </MenuContext.Provider>
  </div>);

export default App;



