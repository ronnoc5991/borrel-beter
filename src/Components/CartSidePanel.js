import React, { useEffect, useRef } from 'react'

function CartSidePanel(props) {

    let panel = useRef(null);

    useEffect(() => {
        gsap.to(panel, {right: 0, duration: .3}) //eslint-disable-line
    }, [])

    function calculateTotal () {
        let total = props.cart.reduce((acc, itemArray) => {
            return acc + (itemArray[0].price * itemArray[1])
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

            { props.cart.map((itemArray) => {
                return <> <hr></hr> <img src={ itemArray[0].imageUrl } key ={ getUniqueKey() } title={ itemArray[0].name } alt=""/> </>
            }) }
        </div>
    )
}

export default CartSidePanel
