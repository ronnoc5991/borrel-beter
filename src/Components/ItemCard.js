import React from 'react'

function ItemCard(props) {

    // useEffect(() => {
    //     Draggable.create(image, { // eslint-disable-line
    //         bounds: document.getElementById("Store")
    //     })
    // }, []) 


    return (
        <div className="ItemCard" onClick={ () => { props.addItem([props.item]) } } title={ props.item.description } >

            <div className="item-image" >
                <img src={ props.item.url } alt={ props.item.description } />
            </div>


            <div className="item-name">
                {props.item.name[0].toUpperCase() + props.item.name.slice(1) }
            </div>

        </div>
    )
}

export default ItemCard
