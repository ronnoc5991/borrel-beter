import React from 'react'
import CartItem from './CartItem'

function Cart(props) {

    function getUniqueKey () {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    function calculateTotal () {
        let total = props.cart.reduce((acc, curr) => {
            return acc + curr.price
        }, 0)
        return Math.round(total * 100 ) / 100
    }

    return (
        <div className="Cart">
            <div className="cart-title">
                Your Order
            </div>

            { props.cart.map((item) => {
                return <CartItem  key={ getUniqueKey() } item={ item } removeItem={ props.removeFunction } />
            }) }

            <div className="cart-total">
                <h3> Total: </h3>
                <h3> { `€ ${calculateTotal()}` } </h3>
            </div>
        </div>
    )
}

export default Cart

//cart needs to take into account multiple items of the same type
//calculate price
//display total
//list out items and quantities and descriptions with images?