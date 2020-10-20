import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import ItemCard from './ItemCard'

function Snacks(props) {

    const [snacks, setSnacks] = useState(null);
    const [open, setOpen] = useState(false);

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
        setOpen(!open)
    }

    return (
        <div className="Snacks">

            <div className="drawer-title" onClick={ handleClick }>
                <h4>Snacks</h4>
            </div>

            <div className={`drawer ${ open ? 'open' : 'closed' }`}>
                {  (snacks && open) && snacks.map((snack) => {
                    return <ItemCard addItem={ addItemToCart } item={snack} />
                })}              
            </div>

        </div>
    )
}

export default Snacks
