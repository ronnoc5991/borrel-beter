import React, { useState, useEffect } from 'react'
import { db }  from '../firebase'

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

    function addItemToCart (item) {
        props.addItem([item])
    }

    return (
        <div className="Cheeses">
            {  cheeses ? cheeses.map((cheese) => {
                return <div key={cheese.name} onClick={ () => addItemToCart(cheese) } > { `${cheese.name[0].toUpperCase() + cheese.name.slice(1) }`  } </div>
            }) : null }
        </div>
    )
}

export default Cheeses
