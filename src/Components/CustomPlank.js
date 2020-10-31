import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Drawers from './Drawers'

function CustomPlank(props) {

    const [miniCart, setMiniCart] = useState([]);
    const [inSetUp, setInSetUp] = useState(true);

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

    function endSetUp () {
        setInSetUp(false);
    }

    function addToMainCart () {
        if (miniCart.length) {
            props.addItem(miniCart)
        }
    }

    return (
        <div className="CustomPlank" >

            <Link to="/borrel-beter/">
                <div className="menu-button">
                    Store
                </div>
            </Link>

            <Link to="/borrel-beter/cart">
                <div className="menu-button second">
                    Cart
                </div>
            </Link>
            
            <div className="add-plank" onClick={ addToMainCart } >
                Add to Cart
            </div>

            { inSetUp && 
                <div className="walkthrough-container">
                    <h1>Step One:</h1>
                    <h2>Select the items you want below</h2>
                    <br/>
                    <h1>Step Two:</h1>
                    <h2>Arrange them on the plank</h2>
                    <br/>
                    <h1>Step Three:</h1>
                    <h2>Add the plank to your cart</h2>

                    <div className="ok-button" onClick={ endSetUp } >OK!</div>
                </div>
            }

            <div className="plank-container" ref={ el => container = el }>
                <img id="plank-image" src="https://firebasestorage.googleapis.com/v0/b/borrelbeter.appspot.com/o/RectanglePlank.png?alt=media&token=f6f2cd77-1e30-4f31-93bd-e1a2f7adc361" alt=""/>

                { miniCart && miniCart.map((item) => {
                    return <div className="draggable" id={`${item.name}`}  key={ getUniqueKey() }>
                        <img src={ item.imageUrl } alt=""/>
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