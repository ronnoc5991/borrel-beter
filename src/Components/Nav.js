import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as CartImage}  from '../cart.svg'


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
                    <Link to="/borrel-beter/cart">
                        <CartImage />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav