import React, { useState, useEffect } from 'react'
import { db } from '../firebase'

function Beers(props) {

    const [beers, setBeers] = useState(null)

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

    return (
        <div className="Beers">
            {  beers ? beers.map((beer) => {
                return <div key={beer.name} onClick={ () => addItemToCart(beer) }> { `${beer.name[0].toUpperCase() + beer.name.slice(1) }`  } </div>
            }) : null }
        </div>
    )
}

export default Beers
