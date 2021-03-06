import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Drawers from './Drawers'

function CustomPlank(props) {

    const [miniCart, setMiniCart] = useState([]);
    const [inSetUp, setInSetUp] = useState(true);
    const [added, setAdded] = useState(false);

    // [ item, positionY, positionY ]

    let container = useRef(null);
    let walkthrough = useRef(null);
    let addToCart = useRef(null);

    useEffect(() => {
        gsap.to(walkthrough, {opacity: 1, duration: 1, delay: .5}) //eslint-disable-line
        gsap.to(container, {opacity: 1, duration: 1, delay: .5}) //eslint-disable-line
        gsap.to(addToCart, {y: '18vh', duration: 1.5, delay: .5}) //eslint-disable-line
    }, [])

    function addItemToMiniCart (item) {
        setMiniCart([...miniCart, item])
    }

    function createDraggable () {
        Draggable.create('.draggable', { //eslint-disable-line
            bounds: container,
        })
    }

    useEffect(() => {
        if (miniCart.length > 0) {
            createDraggable()
        }
    }, )

    function getUniqueKey () {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    function removeItemFromCart (item) {
        let newMiniCart = miniCart.filter((items) => {
        return items.name !== item.name
        })
        setMiniCart(newMiniCart);
    }

    function endSetUp () {
        setInSetUp(false);
    }

    function addToMainCart () {
        if (miniCart.length) {
            props.addItem(miniCart)
            setAdded(true)
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
            
            { added ? 
                <div className="added-plank">
                    Added To Cart!
                </div>
                :
                <div className="add-plank" onClick={ addToMainCart } ref={ el => { addToCart = el } }>
                    Add to Cart
                </div>
            }


            { inSetUp && 
                <div className="walkthrough-container" ref={ el => { walkthrough = el } }>
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
                    return <div className="draggable"  key={ getUniqueKey() }>
                        <img src={ item.imageUrl } alt=""/>
                        <div className="delete-button" onClick={ () => { removeItemFromCart(item) } } ><i className="fa fa-lg fa-trash"></i></div>
                    </div>
                }) }
            </div>


            <Drawers addItem={ addItemToMiniCart } />

        </div>
    )
}

export default CustomPlank