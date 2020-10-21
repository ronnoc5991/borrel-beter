import React, { useState } from 'react';
import './styles/styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Components/Home'
import Store from './Components/Store'
import Cart from './Components/Cart'

function App() {

  const [cart, setCart] = useState([]);

  function addItemToCart (item) {
    let newCart = [...cart, ...item]; //spreads the cart and the new item/items out and sets the new cart
    setCart(newCart);
  }

  function removeItemFromCart (itemID) { //find item in cart, then remove

  }

  return (
    <Router>
      <div className="App">

        <Switch>

          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/store" exact>
            <Nav cart={ cart } />
            <Store addItem={ addItemToCart } cart={ cart } />
          </Route>

          <Route path="/cart" exact>
            <Nav cart={ cart } />
            <Cart cart={ cart } removeFunction={ removeItemFromCart } />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
