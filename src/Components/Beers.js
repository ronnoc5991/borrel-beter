import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import ItemCard from './ItemCard'

function Beers(props) {

    const [beers, setBeers] = useState(null);

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

    function handleClick() {
        props.openFunction(0, props.openState);
    }

    function getUniqueKey () {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    return (
        <div className="Beers" >

            <div className="drawer-title" onClick={ handleClick }>
                <h4>Beers</h4>
            </div>

            <div className={`drawer ${props.openState ? 'open' : 'closed'}`}>
                { beers && beers.map((beer) => {

                    return <ItemCard key={ getUniqueKey() } item={beer} />
                
                }) }
            </div>
        </div>
    )
}

export default Beers
