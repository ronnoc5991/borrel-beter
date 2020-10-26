import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import ItemCard from './ItemCard'

function Meats(props) {

    const [meats, setMeats] = useState(null);

    useEffect(() => {
        let meatArray = [];
        db.collection('items').where('category', '==', 'meat')
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                meatArray.push(doc.data())
            })
            setMeats(meatArray)
        })
    }, [])

    function handleClick () {
        props.openFunction(2, props.openState)
    }

    function getUniqueKey () {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    return (
        <div className="Meats">

            <div className="drawer-title" onClick={ handleClick } >
                <h4>Meats</h4>
            </div>

            <div className={`drawer ${ props.openState ? 'open' : 'closed' }`}>
                { meats && meats.map((meat) => {
                    return <ItemCard key={ getUniqueKey() } item={meat} />
                })}              
            </div>


        </div>
    )
}

export default Meats
