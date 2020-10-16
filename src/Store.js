import React from 'react'

function Store(props) {

    const item = { //the items should be pulled from the database and displayed here in drawers
        name: 'Chorizo',
        description: 'Smoked Spanish sausage, seasoned with paprika',
        id: 1,
        price: 3.99
    }

    function addNewItem() {
        props.addItem(item)
    }

    return (
        <div className="Store view">
            Hello from Store
            <hr/>
            <button onClick={addNewItem} >Add Item</button>
        </div>
    )
}

export default Store