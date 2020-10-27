import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Drawers from './Drawers'

function CustomPlank(props) {

    const [miniCart, setMiniCart] = useState([]);

    let container = useRef(null);

    function addItemToMiniCart (item) {
        setMiniCart([...miniCart, item])
    }

    function createDraggables (name) {
        Draggable.create('.draggable', { //eslint-disable-line
            bounds: container,
            onDragEnd: () => {
                let distanceFromTop = document.getElementById(`${name}`).getBoundingClientRect().top
                let distanceFromLeft = document.getElementById(`${name}`).getBoundingClientRect().left
                console.log(distanceFromTop);
                console.log(distanceFromLeft);
            },
        })
    }

    useEffect(() => {
        if (miniCart.length > 0) {
            createDraggables(miniCart[0].name)
        }
    }, )

    function getUniqueKey () {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    function removeItemFromCart (itemName) {
        let newMiniCart = miniCart.filter((item) => {
        return item.name !== itemName
        })
        setMiniCart(newMiniCart);
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
            
            <div className="add-plank" onClick={ () => { props.addItem(miniCart) } } >
                Add to Cart
            </div>

            <div className="plank-container" ref={ el => container = el }>
                <img src="https://firebasestorage.googleapis.com/v0/b/borrelbeter.appspot.com/o/RectanglePlank.png?alt=media&token=f6f2cd77-1e30-4f31-93bd-e1a2f7adc361" alt=""/>

                { miniCart && miniCart.map((item) => {
                    return <div className="draggable" id={`${item.name}`}  key={ getUniqueKey() }>
                        <img src={ item.url } alt=""/>
                        <div className="delete-button" onClick={ () => { removeItemFromCart(item.name) } } ><i className="fa fa-lg fa-trash"></i></div>
                    </div>
                }) }
            </div>


            <Drawers addItem={ addItemToMiniCart } />

        </div>
    )
}

export default CustomPlank

//each draggable should be created with the coordinates that are stored with it...
// upon creation, they should be placed in those coordinates
// update this state on dragend