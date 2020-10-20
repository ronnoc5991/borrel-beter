import React, { useState, useEffect } from 'react'
import { db }  from '../firebase'
import ItemCard from './ItemCard'

function Cheeses(props) {

    const [cheeses, setCheeses] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        let cheeseArray = [];
        db.collection('items').where('category', '==', 'cheese')
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                cheeseArray.push(doc.data())
            })
            setCheeses(cheeseArray);
        })
    }, [])

    function addItemToCart (item) {
        props.addItem([item])
    }

    function handleClick () {
        setOpen(!open)
    }

    return (
        <div className="Cheeses">

            <div className="drawer-title" onClick={ handleClick } >
                <h4>Cheeses</h4>
            </div>

            <div className={`drawer ${ open ? 'open' : 'closed' }`}>
                {  (cheeses && open) && cheeses.map((cheese) => {
                    return <ItemCard addItem={ addItemToCart } item={cheese} />
                })}              
            </div>

        </div>
    )
}

export default Cheeses
