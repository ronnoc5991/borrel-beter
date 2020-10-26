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

    function handleClick () {
        props.openFunction(1, props.openState)
    }

    function getUniqueKey () {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    return (
        <div className="Cheeses">

            <div className="drawer-title" onClick={ handleClick } >
                <h4>Cheeses</h4>
            </div>

            <div className={`drawer ${ props.openState ? 'open' : 'closed' }`}>
                { cheeses && cheeses.map((cheese) => {
                    return <ItemCard key={ getUniqueKey() } item={cheese} />
                })}              
            </div>

        </div>
    )
}

export default Cheeses
