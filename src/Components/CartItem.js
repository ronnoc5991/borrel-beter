import React from 'react'

function CartItem(props) {

    //function that can increment or decrement the quantity of a given item
    //here, we know the index of the item in the cart and the quantity

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
                <input type="number" min="1" value={ props.itemArray[1] } onChange={ (e) => {
                    props.changeQuantity(props.index, parseInt(e.target.value))
                } } /> 
            </div>


            <div className="remove-button" onClick={ () => props.removeItem(props.itemArray[0].name) } >
                <i className="fa fa-lg fa-trash"></i>
            </div>
        </div>
    )
}

export default CartItem
