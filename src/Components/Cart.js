import React from 'react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'

function Cart(props) {

    function getUniqueKey () {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    function calculateTotal () {
        let total = props.cart.reduce((acc, itemArray) => {
            return acc + (itemArray[0].price * itemArray[1])
        }, 0)
        return Math.round(total * 100 ) / 100
    }

    return (
        <div className="Cart">

            <Link to="/borrel-beter/">
                <div className="menu-button">
                    Store
                </div>
            </Link>

            <div className="cart-title">
                Your Order
            </div>

            <div className="cart-headers">
                <div className="item-name">
                    Item
                </div>

                <div className="item-price">
                    Price
                </div>

                <div className="item-quantity">
                    #
                </div>
            </div>

            { props.cart.map((itemArray, index) => {
                return <CartItem  key={ getUniqueKey() } itemArray={ itemArray } index={ index } removeItem={ props.removeFunction } changeQuantity={ props.changeQuantity } />
            }) }

            <div className="cart-total">
                <h3> Total: </h3>
                <h3> { `€ ${calculateTotal()}` } </h3>
            </div>

            <Link to="/borrel-beter/checkout">
                <div className="checkout-button">
                    Checkout
                </div>
            </Link>

        </div>
    )
}

export default Cart