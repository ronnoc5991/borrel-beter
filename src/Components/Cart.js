import React from 'react'

function Cart(props) {
    return (
        <div className="Cart view">
            Hello from Cart

            { props.cart.map((item) => {
                return <div key={item.name} > { `${item.name[0].toUpperCase() + item.name.slice(1) }`  } </div>
            }) }
        </div>
    )
}

export default Cart

//cart needs to take into account multiple items of the same type
//calculate price
//display total
//list out items and quantities and descriptions with images?