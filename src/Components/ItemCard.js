import React, { useState } from 'react'

function ItemCard(props) {

    const [isSelected, setIsSelected] = useState(false);

    function selectItem () {
        setIsSelected(!isSelected);
        props.addItem(props.item)
    }

    return (
        <div className={`ItemCard ${ isSelected ? 'selected' : '' }`} title={ props.item.description } onClick={ selectItem }>

            <div className="item-image" >
                <img src={ props.item.url } alt={ props.item.description } />
            </div>


            <div className="item-name">
                {props.item.name[0].toUpperCase() + props.item.name.slice(1) }
            </div>

        </div>
    )
}

export default ItemCard
