import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import ItemCard from './ItemCard'

function Snacks(props) {

    const [snacks, setSnacks] = useState(null);

    useEffect(() => {
        let snackArray = [];
        db.collection('items').where('category', '==', 'snack')
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                snackArray.push(doc.data())
            })
            setSnacks(snackArray);
        })
    }, [])

    function addItemToCart (item) {
        props.addItem([item])
    }

    function handleClick () {
        props.openFunction(3, props.openState)
    }

    return (
        <div className="Snacks">

            <div className="drawer-title" onClick={ handleClick }>
                <h4>Snacks</h4>
            </div>

            <div className={`drawer ${ props.openState ? 'open' : 'closed' }`}>
                {  snacks && snacks.map((snack) => {
                    return <ItemCard addItem={ addItemToCart } item={snack} />
                })}              
            </div>

        </div>
    )
}

export default Snacks
