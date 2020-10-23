import React, { useState, useEffect } from 'react'
import Plank from './Plank'
import { db } from '../firebase' 

function Store(props) {

    const [plankjes, setPlankjes] = useState(null);

    useEffect(() => {
        let plankjesArray = [];
        db.collection('plankjes').get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                plankjesArray.push(doc.data())
            })
            setPlankjes(plankjesArray);
        })
    }, [])

    function getUniqueKey () {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    return (
        <div className="Store" id="Store">
           { plankjes && plankjes.map((plankje) => {
               return <Plank key={ getUniqueKey() } plank={ plankje } addItem={ props.addItem } />
           }) }
        </div>
    )
}

export default Store