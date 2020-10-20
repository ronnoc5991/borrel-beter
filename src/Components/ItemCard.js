import React from 'react'

function ItemCard(props) {
    return (
        <div className="ItemCard" onClick={ () => { props.addItem(props.item) } } >

            <div className="item-image">
                -
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
