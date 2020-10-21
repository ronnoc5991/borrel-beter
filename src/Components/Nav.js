import React from 'react'
import { Link } from 'react-router-dom'


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
                    <Link to="/borrel-beter/store">Plankjes</Link>
                </li>
                <li>
                    <Link to="/borrel-beter/cart">Cart { formatCartText(props.cart.length) } </Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav