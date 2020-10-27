import React, { useState, useEffect } from 'react'
import { db }  from '../firebase'
import ItemCard from './ItemCard'

function Cheeses(props) {

    const [cheeses, setCheeses] = useState(null);

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

    function getUniqueKey () {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    return (
        <div className="Cheeses">

            <div className={`drawer cheese ${ props.openState ? 'open' : 'closed' }`}>
                { cheeses && cheeses.map((cheese) => {
                    return <ItemCard key={ getUniqueKey() } item={cheese} addItem={ props.addItem }/>
                })}              
            </div>

        </div>
    )
}

export default Cheeses
