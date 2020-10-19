import React, { useState, useEffect } from 'react'
import { db } from '../firebase'

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

    function addItemToCart (item) {
        props.addItem([item])
    }

    return (
        <div className="Snacks">
            {  snacks ? snacks.map((snack) => {
                return <div key={snack.name} onClick={ () => addItemToCart(snack) }> { `${snack.name[0].toUpperCase() + snack.name.slice(1) }`  } </div>
            }) : null }
        </div>
    )
}

export default Snacks
