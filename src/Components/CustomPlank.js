import React, { useState } from 'react'
import Beers from './Beers'
import Cheeses from './Cheeses'
import Meats from './Meats'
import Snacks from './Snacks'

function CustomPlank(props) {

    const [drawers, setDrawers] = useState([false, false, false, false]);


    function openDrawer (drawer, currentState) { //there is a more elegant solution...currently, each child compenent has to know its own place in the draweropen state
        let newDrawers = [false, false, false, false];
        newDrawers[drawer] = !currentState;
        setDrawers(newDrawers);
    }

    return (
        <div className="CustomPlank" >
            <div className="drawer-container">
                <Beers openFunction={ openDrawer } openState={drawers[0]} />
                <Cheeses openFunction={ openDrawer } openState={drawers[1]} />
                <Meats openFunction={ openDrawer } openState={drawers[2]} />
                <Snacks openFunction={ openDrawer } openState={drawers[3]} />
            </div>
        </div>
    )
}

export default CustomPlank

//user should select 2 cheeses, 2 meats, 2 snacks and 1 beer
// then they should be prompted to add to cart