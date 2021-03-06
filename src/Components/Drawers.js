import React, { useState, useEffect, useRef } from 'react'
import Beers from './Beers'
import Cheeses from './Cheeses'
import Meats from './Meats'
import Snacks from './Snacks'
import Breads from './Breads'

function Drawers(props) {

    const [drawers, setDrawers] = useState([true, false, false, false, false]);

    let drawersDiv = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline(); //eslint-disable-line
        tl.to(drawersDiv, {y: '-25vh', duration: 1, delay: .5})
    }, [])

    function openDrawer (drawer, currentState) { //each child compenent has to know its own place in the draweropen state
        let newDrawers = [false, false, false, false];
        newDrawers[drawer] = !currentState;
        setDrawers(newDrawers);
    }

    return (
        <div className="Drawers" ref={ el => { drawersDiv = el } }>
            <div className="drawer-container">
                <div className="drawer-titles">
                    <div className="drawer-title beer" onClick={ () => openDrawer(0, drawers[0]) }>
                        <h4>Beers</h4>
                    </div>
                    <div className="drawer-title cheese" onClick={ () => openDrawer(1, drawers[1]) }>
                        <h4>Cheeses</h4>
                    </div>
                    <div className="drawer-title meat" onClick={ () => openDrawer(2, drawers[2]) }>
                        <h4>Meats</h4>
                    </div>
                    <div className="drawer-title snack" onClick={ () => openDrawer(3, drawers[3]) }>
                        <h4>Snacks</h4>
                    </div>
                    <div className="drawer-title bread" onClick={ () => openDrawer(4, drawers[4]) }>
                        <h4>Breads</h4>
                    </div>
                </div>
                <Beers openState={ drawers[0] } addItem={ props.addItem } />
                <Cheeses openState={drawers[1]} addItem={ props.addItem } />
                <Meats openState={drawers[2]} addItem={ props.addItem } />
                <Snacks openState={drawers[3]} addItem={ props.addItem } />
                <Breads openState={drawers[4]} addItem={ props.addItem } />
            </div>
        </div>
    )
}

export default Drawers
