import React, { useState, useEffect } from 'react';
import '../styles/styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Store from './Store'
import CustomPlank from './CustomPlank'
import Cart from './Cart'
import CartSidePanel from './CartSidePanel'


function App() {

  const [cart, setCart] = useState([]);
  const [sideCart, setSideCart] = useState(false);

  function addItemToCart (item) {
    let newCart = [...cart];
    if (item.length) { //if the item is an array of items
      let itemsArray = [...item];
      itemsArray.forEach((itemInArray) => {
        //find if it is already in cart
        if (checkCart(itemInArray)) {
          let index = cart.findIndex((itemArray) => {
            return itemArray[0].name === itemInArray.name
          })
          newCart[index][1] += 1; //increment the quantity of that item
        } else {
          newCart.push([itemInArray, 1])
        }
      })
      setCart(newCart)
    } else {
      if (checkCart(item)) { //if item is in cart
        let index = cart.findIndex((itemArray) => {
          return itemArray[0].name === item.name
        })
        newCart[index][1] += 1; //increment the quantity of that item
        setCart(newCart)
      } else {
        newCart.push([item, 1])
        setCart(newCart);
      }
    }
  }

  function checkCart (item) {
    let exists = false;  //loop through cart and find if an array with this item object already exists
    for (let i = 0; i < cart.length; i++) {
      if (cart[i][0].name === item.name) {
        exists = true;
      }
    }
    return exists;
  }

  function removeItemFromCart (itemName) {
    let newCart = cart.filter((itemArray) => {
      return itemArray[0].name !== itemName
    })
    setCart(newCart);
  }

  function shouldSideCartRender () {
    if (window.innerWidth > 1100) {
      setSideCart(true)
    } else {
      setSideCart(false);
    }
  }

  useEffect(() => {
    shouldSideCartRender();
    window.addEventListener('resize', shouldSideCartRender) //remove this?
    return () => {
      window.removeEventListener('resize', shouldSideCartRender)
    }
  }, [])

  
  return (
    <Router>
      <div className="App">

        <Switch>

          <Route path="/borrel-beter/" exact>
            <Home />
          </Route>

          <Route path="/borrel-beter/store" exact>
            <Store addItem={ addItemToCart } cart={ cart } />
            { (cart.length > 0 && sideCart) && <CartSidePanel cart={ cart } /> }
          </Route>

          <Route path="/borrel-beter/cart" exact>
            <Cart cart={ cart } removeFunction={ removeItemFromCart } />
          </Route>

          <Route path="/borrel-beter/customize" exact>
            <CustomPlank  addItem={ addItemToCart } />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
