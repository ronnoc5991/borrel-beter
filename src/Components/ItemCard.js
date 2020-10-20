import React, { useRef, useEffect } from 'react'

function ItemCard(props) {

    let image = useRef(null);

    useEffect(() => {
        Draggable.create(image, { // eslint-disable-line
            bounds: document.getElementById("Store")
        })
    }, []) //this creates a draggable


    return (
        <div className="ItemCard" onClick={ () => { props.addItem(props.item) } } >

            <div className="item-image" ref={el => image = el}>
                Image
            </div>

            <div className="item-name">
                {props.item.name[0].toUpperCase() + props.item.name.slice(1) }
            </div>
            
            <div className="item-price">
                {props.item.price}
            </div>

        </div>
    )
}

export default ItemCard
