import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Nav(props) {

    const [isOpen, setIsOpen] = useState(false)

    function handleClick () {
        setIsOpen(!isOpen);
    }

    return (
        <div className="Nav">

            <div className="menu-button" onClick={ handleClick }>
                Menu
            </div>

            <div className={ `menu ${isOpen ? 'open': ''}` }>
                <ul>
                    <li onClick={ handleClick }>
                        <Link to="/borrel-beter/store">
                            Plankjes
                        </Link>
                    </li>
                    <li onClick={ handleClick }>
                        <Link to="/borrel-beter/cart">
                            Cart
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Nav