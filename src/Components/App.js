import React, { useState, useEffect } from 'react';
import '../styles/styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Store from './Store'
import Cart from './Cart'
import CartSidePanel from './CartSidePanel'


function App() {

  const [cart, setCart] = useState([]);
  const [sideCart, setSideCart] = useState(false);

  function addItemToCart (item) {
    let newCart = [...cart, ...item];
    setCart(newCart);
  }

  function removeItemFromCart (itemName) {
    let newCart = cart.filter((item) => {
      return item.name !== itemName
    })
    setCart(newCart);
  }

  function shouldSideCartRender () {
    console.log(window.innerWidth)
    if (window.innerWidth > 1100) {
      setSideCart(true)
    } else {
      setSideCart(false);
    }
  }

  useEffect(() => {
    shouldSideCartRender();
  }, [])

  window.addEventListener('resize', shouldSideCartRender)
  
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
            { (cart.length > 0 && sideCart) && <CartSidePanel cart={ cart } /> }
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
