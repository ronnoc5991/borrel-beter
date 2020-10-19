import React, { useState, useEffect } from 'react'
import { db } from '../firebase'

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

    function addItemToCart (item) {
        props.addItem([item])
    }

    return (
        <div className="Meats">
            {  meats ? meats.map((meat) => {
                return <div key={meat.name} onClick={ () => addItemToCart(meat) }> { `${meat.name[0].toUpperCase() + meat.name.slice(1) }`  } </div>
            }) : null }
        </div>
    )
}

export default Meats
