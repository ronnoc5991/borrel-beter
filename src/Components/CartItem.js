import React from 'react'

function CartItem(props) {
    return (
        <div className="CartItem" >
            <div className="item-name">
                { props.item.name }
            </div>
            <div className="item-price">
                { props.item.price }
            </div>

            <div className="remove-button" onClick={ () => props.removeItem(props.item.id) } >
                DELETE
            </div>
        </div>
    )
}

export default CartItem
