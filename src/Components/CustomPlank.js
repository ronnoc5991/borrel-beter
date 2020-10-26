import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Beers from './Beers'
import Cheeses from './Cheeses'
import Meats from './Meats'
import Snacks from './Snacks'

function CustomPlank(props) {

    const [drawers, setDrawers] = useState([true, false, false, false]);


    function openDrawer (drawer, currentState) { //there is a more elegant solution...currently, each child compenent has to know its own place in the draweropen state
        let newDrawers = [false, false, false, false];
        newDrawers[drawer] = !currentState;
        setDrawers(newDrawers);
    }

    return (
        <div className="CustomPlank" >

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

            <div className="drawer-container">
                <div className="drawer-titles">
                    <div className="drawer-title" onClick={ () => openDrawer(0, drawers[0]) }>
                        <h4>Beers</h4>
                    </div>
                    <div className="drawer-title" onClick={ () => openDrawer(1, drawers[1]) }>
                        <h4>Cheeses</h4>
                    </div>
                    <div className="drawer-title" onClick={ () => openDrawer(2, drawers[2]) }>
                        <h4>Meats</h4>
                    </div>
                    <div className="drawer-title" onClick={ () => openDrawer(3, drawers[3]) }>
                        <h4>Snacks</h4>
                    </div>
                </div>
                <Beers openState={ drawers[0] } />
                <Cheeses openState={drawers[1]} />
                <Meats openState={drawers[2]} />
                <Snacks openState={drawers[3]} />
            </div>
        </div>
    )
}

export default CustomPlank

//user should select 2 cheeses, 2 meats, 2 snacks and 1 beer
// then they should be prompted to add to cart