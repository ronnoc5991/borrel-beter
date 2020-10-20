import React from 'react'
import CartItem from './CartItem'

function Cart(props) {

    function prepareCart() {
        //takes cart from props and sorts nicely?
    }

    return (
        <div className="Cart view">
            <div className="cart-title">
                Your Order
            </div>

            { props.cart.map((item) => {
                return <CartItem item={ item } removeItem={ props.removeFunction } />
            }) }
        </div>
    )
}

export default Cart

//cart needs to take into account multiple items of the same type
//calculate price
//display total
//list out items and quantities and descriptions with images?