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
                <Beers addItem={ props.addItem } openFunction={ openDrawer } openState={drawers[0]} />
                <Cheeses addItem={ props.addItem } openFunction={ openDrawer } openState={drawers[1]} />
                <Meats addItem={ props.addItem } openFunction={ openDrawer } openState={drawers[2]} />
                <Snacks addItem={ props.addItem } openFunction={ openDrawer } openState={drawers[3]} />
            </div>
        </div>
    )
}

export default CustomPlank
