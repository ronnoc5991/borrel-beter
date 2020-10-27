import React from 'react'
import { Link } from 'react-router-dom'

function Plank(props) {


    function addItem (item) {
        props.addItem([item])
    }

    return (
        <div className="Plank" id={ `plank-${props.index}` }>
            <div className="plank-info">
                <div className="plank-name">
                    { props.plank.name }
                </div>
                <div className="plank-description">
                    { props.plank.description }
                </div>

                { props.plank.name === "Make Your Own!" ? 
                    <Link to="/borrel-beter/customize">
                        <div className="add-plank"> Customize! </div>
                    </Link>
                    :
                    ( props.inCart ? 
                    <div className="added-plank" >
                        In Cart
                    </div>
                :
                    <div className="add-plank" onClick={ () => { addItem(props.plank) } } >
                        Add to Cart
                    </div>)
                }

            </div>
            <div className="plank-image">
                <img src={ props.plank.imageUrl } alt=""/>
            </div>
        </div>
    )
}

export default Plank
