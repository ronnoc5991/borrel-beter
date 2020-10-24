import React from 'react'
import { Link } from 'react-router-dom'


function Nav(props) {

    return (
        <div className="Nav">
            <div className="logo">
                <Link to="/borrel-beter/">
                    <h1>Borrel <span>Beter</span></h1>
                </Link>
            </div>
            <ul>
                <li>
                    <Link to="/borrel-beter/store">
                        Plankjes
                    </Link>
                </li>
                <li>
                    <Link to="/borrel-beter/cart">
                        Cart
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav