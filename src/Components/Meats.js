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

    function getUniqueKey () {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    return (
        <div className="Meats">

            <div className={`drawer meat ${ props.openState ? 'open' : 'closed' }`}>
                { meats && meats.map((meat) => {
                    return <ItemCard key={ getUniqueKey() } item={meat} addItem={ props.addItem }/>
                })}              
            </div>


        </div>
    )
}

export default Meats
