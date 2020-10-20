import React, { useState, useEffect } from 'react'
import Beers from './Beers'
import Cheeses from './Cheeses'
import Meats from './Meats'
import Snacks from './Snacks'

function Store(props) {

    const [drawers, setDrawers] = useState([false, false, false, false]);

    function openDrawer (drawer, currentState) { //there is a more elegant solution...currently, each child compenent has to know its own place in the draweropen state
        let newDrawers = [false, false, false, false];
        newDrawers[drawer] = !currentState;
        setDrawers(newDrawers);
    }

    return (
        <div className="Store view" id="Store">
            <div className="drawer-container">
                <Beers addItem={ props.addItem } openFunction={ openDrawer } openState={drawers[0]} />
                <Cheeses addItem={ props.addItem } openFunction={ openDrawer } openState={drawers[1]} />
                <Meats addItem={ props.addItem } openFunction={ openDrawer } openState={drawers[2]} />
                <Snacks addItem={ props.addItem } openFunction={ openDrawer } openState={drawers[3]} />
            </div>
        </div>
    )
}

export default Store

//incorporate local storage so the cart persists over sessions?
//move open state to store component... pass down each drawers open state with props
//create open state setter here and pass it down to drawer children
//create function that closes drawers that are not needed and opens drawer that is selected