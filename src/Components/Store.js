import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
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
        <div className="Store view">
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

//need to display each item with image
//incorporate local storage so the cart persists over sessions?