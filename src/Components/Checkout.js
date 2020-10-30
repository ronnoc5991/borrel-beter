import React from 'react'
import { Link } from 'react-router-dom'

function Checkout(props) {

    function calculateTotal () {
        let total = props.cart.reduce((acc, itemArray) => {
            return acc + (itemArray[0].price * itemArray[1])
        }, 0)
        return Math.round(total * 100 ) / 100
    }

    return (
        <div className="Checkout">

            <Link to="/borrel-beter/store">
                <div className="menu-button">
                    Store
                </div>
            </Link>

            <Link to="/borrel-beter/cart">
                <div className="menu-button second">
                    Cart
                </div>
            </Link>

            <div className="cart-total">
                <h3> Total: </h3>
                <h3> { `€ ${calculateTotal()}` } </h3>
            </div>

            <div className="checkout-form">
                <form>
                    <h1>Billing Address</h1>
                    <label htmlFor="full-name">
                        Full Name: 
                        <br/>
                        <input type="text" name="full-name" id="full-name"/>
                    </label>
                    <label htmlFor="email">
                        Email:
                        <br/>
                        <input type="email" name="email" id="email"/>
                    </label>
                    <label htmlFor="address">
                        Address:
                        <br/>
                        <input type="text" name="address" id="address"/>
                    </label>
                    <label htmlFor="city">
                        City
                        <br/>
                        <input type="text" name="city" id="city"/>
                    </label>
                    <label htmlFor="country">
                        Country/State:
                        <br/>
                        <input type="text" name="country" id="country"/>
                    </label>
                    <label htmlFor="postal-code">
                        Postal Code
                        <br/>
                        <input type="text" name="postal-code" id="postal-code"/>
                    </label>
                </form>

                <form>
                    <h1>Payment</h1>
                    <label htmlFor="name-on-card">
                        Name on Card: 
                        <br/>
                        <input type="text" name="name-on-card" id="name-on-card"/>
                    </label>
                    <label htmlFor="credit-card-number">
                        Credit Card Number:
                        <br/>
                        <input type="number" name="credit-card-number" id="credit-card-number"/>
                    </label>
                    <label htmlFor="expiration">
                        Expiration:
                        <br/>
                        <input type="date" name="expiration" id="expiration"/>
                    </label>
                    <label htmlFor="cvv">
                        CVV
                        <br/>
                        <input type="number" name="cvv" id="cvv"/>
                    </label>
                </form>
            </div>

            <div className="final-checkout-button" onClick={ () => { alert('Enjoy your plankje!') } } >
                Pay Now!
            </div>
        </div>
    )
}

export default Checkout


//form
//, address, payment information,