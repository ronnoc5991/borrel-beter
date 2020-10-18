import React, { useState, useEffect } from 'react'
import { db } from '../firebase'

function Store(props) {

    const [items, setItems] = useState(null);

    useEffect(() => {
        let itemsArray = [] //blank array to recieve items
        db.collection('items').get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                itemsArray.push(doc.data());
            })
        })
        setItems(itemsArray)
    }, [])

    function addNewItem() {
        props.addItem(items[0])  //right now just adds the first item from the database
    }

    return (
        <div className="Store view">
            <button onClick={addNewItem} >Add Item</button>
        </div>
    )
}

export default Store

//need to display each item with image