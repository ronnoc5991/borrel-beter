import React from 'react'

function CartItem(props) {
    return (
        <div className="CartItem" >
            <div className="item-name">
                { props.item.name }
            </div>

            <div className="item-image">
                <img src={ props.item.imageUrl } alt=""/>
            </div>

            <div className="item-price">
                { `€ ${props.item.price}` }
            </div>


            <div className="remove-button" onClick={ () => props.removeItem(props.item.name) } >
                <i className="fa fa-lg fa-trash"></i>
            </div>
        </div>
    )
}

export default CartItem
