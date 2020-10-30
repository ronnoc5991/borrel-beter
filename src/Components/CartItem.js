import React, { useState } from 'react'

function CartItem(props) {

    return (
        <div className="CartItem" >
            <div className="item-name">
                { props.itemArray[0].name }
            </div>

            <div className="item-image">
                <img src={ props.itemArray[0].imageUrl } alt=""/>
            </div>

            <div className="item-price">
                { `€ ${props.itemArray[0].price}` }
            </div>

            <div className="item-quantity">
                <input type="number" defaultValue={ props.itemArray[1] } /> 
            </div>


            <div className="remove-button" onClick={ () => props.removeItem(props.itemArray[0].name) } >
                <i className="fa fa-lg fa-trash"></i>
            </div>
        </div>
    )
}

export default CartItem
