import React, { useEffect, useRef } from 'react'

function CartSidePanel(props) {

    let panel = useRef(null);

    useEffect(() => {
        gsap.to(panel, {right: 0, duration: .3}) //eslint-disable-line
    }, [])

    function calculateTotal () {
        let total = props.cart.reduce((acc, curr) => {
            return acc + curr.price
        }, 0)
        return Math.round(total * 100 ) / 100
    }

    function getUniqueKey () {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    return (
        <div className="CartSidePanel" ref={ el => {panel = el} }>
            <div className="subtotal">
                <div className="text">
                    Subtotal
                </div>
                <div className="total">
                {`€ ${ calculateTotal() }`}
                </div>
            </div>

            { props.cart.map((item) => {
                return <img src={ item.imageUrl } key ={ getUniqueKey() } title={ item.name } alt=""/>
            }) }
        </div>
    )
}

export default CartSidePanel
