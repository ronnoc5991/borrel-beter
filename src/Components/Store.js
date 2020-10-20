import React, { useState, useEffect } from 'react'
import Beers from './Beers'
import Cheeses from './Cheeses'
import Meats from './Meats'
import Snacks from './Snacks'

function Store(props) {

    // const [items, setItems] = useState(null);

    // useEffect(() => {
    //     let itemsArray = [] //blank array to recieve items
    //     db.collection('items').get()
    //     .then((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             itemsArray.push(doc.data());
    //         })
    //     })
    //     setItems(itemsArray)
    // }, [])


    return (
        <div className="Store view" id="Store">
            <div className="drawer-container">
                <Beers addItem={ props.addItem } />
                <Cheeses addItem={ props.addItem } />
                <Meats addItem={ props.addItem } />
                <Snacks addItem={ props.addItem } />
            </div>
        </div>
    )
}

export default Store

//incorporate local storage so the cart persists over sessions?
//move open state to store component... pass down each drawers open state with props
//create open state setter here and pass it down to drawer children
//create function that closes drawers that are not needed and opens drawer that is selected