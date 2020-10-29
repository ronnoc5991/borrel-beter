import React from 'react'

function ItemCard(props) {

    function selectItem () {
        props.addItem(props.item)
    }

    return (
        <div className="ItemCard" title={ props.item.description } onClick={ selectItem }>

            <div className="item-image" >
                <img src={ props.item.imageUrl } alt={ props.item.description } />
            </div>


            <div className="item-name">
                { props.item.name }
            </div>

        </div>
    )
}

export default ItemCard
