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

    function getUniqueKey () {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    return (
        <div className="Snacks">

            <div className={`drawer ${ props.openState ? 'open' : 'closed' }`}>
                {  snacks && snacks.map((snack) => {
                    return <ItemCard key={ getUniqueKey() } item={snack} />
                })}              
            </div>

        </div>
    )
}

export default Snacks
