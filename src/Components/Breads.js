import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import ItemCard from './ItemCard'

function Breads(props) {

    const [breads, setBreads] = useState(null);

    useEffect(() => {
        let breadsArray = [];
        db.collection('items').where('category', "==", 'bread')
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                breadsArray.push(doc.data())
            })
            setBreads(breadsArray);
        })
    }, [])

    function getUniqueKey () {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    return (
        <div className="Breads" >

            <div className={`drawer bread ${props.openState ? 'open' : 'closed'}`}>
                { breads && breads.map((bread) => {

                    return <ItemCard key={ getUniqueKey() } item={bread} addItem={ props.addItem } />
                
                }) }
            </div>
        </div>
    )
}

export default Breads
