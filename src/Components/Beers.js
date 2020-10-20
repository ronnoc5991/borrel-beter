import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import ItemCard from './ItemCard'

function Beers(props) {

    const [beers, setBeers] = useState(null);
    const [open, setOpen] = useState(false)

    useEffect(() => {
        let beersArray = [];
        db.collection('items').where('category', "==", 'beer')
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                beersArray.push(doc.data())
            })
            setBeers(beersArray);
        })
    }, [])

    function addItemToCart (item) {
        props.addItem([item])
    }

    function handleClick() {
        setOpen(!open)
    }

    return (
        <div className="Beers" >

            <div className="drawer-title" onClick={ handleClick }>
                <h4>Beers</h4>
            </div>

            <div className={`drawer ${open ? 'open' : 'closed'}`}>
                { beers && beers.map((beer) => {

                    return <ItemCard addItem={ addItemToCart } item={beer} />
                
                }) }
            </div>
        </div>
    )
}

export default Beers
