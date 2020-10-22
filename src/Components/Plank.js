import React from 'react'

function Plank(props) {

    function addItem (item) {
        props.addItem([item])
    }

    return (
        <div className="Plank">
            <div className="plank-info">
                <div className="plank-name">
                    { props.plank.name }
                </div>
                <div className="plank-description">
                    { props.plank.description }
                </div>
                <div className="add-plank" onClick={ () => { addItem(props.plank) } } >
                    Add to Cart
                </div>
            </div>
            <div className="plank-image">
                <img src={ props.plank.imageUrl } alt=""/>
            </div>
        </div>
    )
}

export default Plank
