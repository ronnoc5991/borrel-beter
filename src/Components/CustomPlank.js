import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Beers from './Beers'
import Cheeses from './Cheeses'
import Meats from './Meats'
import Snacks from './Snacks'

function CustomPlank(props) {

    const [drawers, setDrawers] = useState([true, false, false, false]);
    const [miniCart, setMiniCart] = useState([]);

    let container = useRef(null);

    function openDrawer (drawer, currentState) { //each child compenent has to know its own place in the draweropen state
        let newDrawers = [false, false, false, false];
        newDrawers[drawer] = !currentState;
        setDrawers(newDrawers);
    }

    function addItemToBundle (item) {
        setMiniCart([...miniCart, item])
    }

    function createDraggables () {
        Draggable.create('.draggable', { //eslint-disable-line
            bounds: container
        })
    }

    useEffect(() => {
        createDraggables()
    })

    function getUniqueKey () {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    function removeItemFromCart (itemName) {
    let newMiniCart = miniCart.filter((item) => {
      return item.name !== itemName
    })
    setMiniCart(newMiniCart);
  }


    //add draggable to the plank area of each item

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

            <div className="plank-container" ref={ el => container = el }>
                <img src="https://firebasestorage.googleapis.com/v0/b/borrelbeter.appspot.com/o/RectanglePlank.png?alt=media&token=f6f2cd77-1e30-4f31-93bd-e1a2f7adc361" alt=""/>

                { miniCart && miniCart.map((item) => {
                    return <div className={`draggable draggable-${item.id}`}  key={ getUniqueKey() }>
                        <img src={ item.url } alt=""/>
                        <div className="delete-button" onClick={ () => { removeItemFromCart(item.name) } } ><i className="fa fa-trash"></i></div>
                    </div>
                }) }
            </div>

            <div className="add-plank" onClick={ () => { props.addItem(miniCart) } } >
                Add to Cart
            </div>

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
                </div>
                <Beers openState={ drawers[0] } addItem={ addItemToBundle } />
                <Cheeses openState={drawers[1]} addItem={ addItemToBundle } />
                <Meats openState={drawers[2]} addItem={ addItemToBundle } />
                <Snacks openState={drawers[3]} addItem={ addItemToBundle } />
            </div>
        </div>
    )
}

export default CustomPlank