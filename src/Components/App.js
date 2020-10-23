import React, { useState } from 'react';
import '../styles/styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Store from './Store'
import Cart from './Cart'
import CartSidePanel from './CartSidePanel'


function App() {

  const [cart, setCart] = useState([]);

  function addItemToCart (item) {
    let newCart = [...cart, ...item]; //spreads the cart and the new item/items out and sets the new cart
    setCart(newCart);
  }

  function removeItemFromCart (itemName) { //find item in cart, then remove... should be implemented with ID numbers
    let newCart = cart.filter((item) => {
      return item.name !== itemName
    })
    setCart(newCart);
  }

  return (
    <Router>
      <div className="App">

        <Switch>

          <Route path="/borrel-beter/" exact>
            <Home />
          </Route>

          <Route path="/borrel-beter/store" exact>
            <Nav cart={ cart } />
            <Store addItem={ addItemToCart } cart={ cart } />
            { (cart.length > 0) && <CartSidePanel cart={ cart } /> }
          </Route>

          <Route path="/borrel-beter/cart" exact>
            <Nav cart={ cart } />
            <Cart cart={ cart } removeFunction={ removeItemFromCart } />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
