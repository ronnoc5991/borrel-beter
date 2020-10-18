import React from 'react'

function Cart(props) {
    return (
        <div className="Cart view">
            Hello from Cart

            { props.cart.map((item) => {
                return <div> { `${item.name}` } </div>
            }) }
        </div>
    )
}

export default Cart