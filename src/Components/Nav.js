import React from 'react'
import { Link } from 'react-router-dom'
import CartImage  from '../cart.svg'
import CartSidePanel from './CartSidePanel'


function Nav(props) {

    function formatCartText (numberOfItems) {
        if (numberOfItems > 0) {
            return `(${numberOfItems})`
        } else {
            return ''
        }
    }

    return (
        <div className="Nav">
            <ul>
                <li>
                    <Link to="/borrel-beter/store">
                        Plankjes
                    </Link>
                </li>
                <li>
                    <Link to="/borrel-beter/cart">
                        <img src={ CartImage } alt=""/>
                    </Link>
                </li>
            </ul>
            { (props.cart.length > 0) && <CartSidePanel cart={ props.cart } /> }
        </div>
    )
}

export default Nav