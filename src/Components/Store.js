import React, { useState, useEffect } from 'react'
import Plank from './Plank'

function Store(props) {

    //This should contain the three pre made plankjes and the link to create your own

    // The preset boards should be fetched here and displayed

    //Custom board option should be displayed afterwards

  

    return (
        <div className="Store view" id="Store">
           <Plank />
           <Plank />
           <Plank />
        </div>
    )
}

export default Store