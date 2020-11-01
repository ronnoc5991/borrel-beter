import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Plank from './Plank'
import { db } from '../firebase' 

function Store(props) {

    const [plankjes, setPlankjes] = useState(null);
    const [activePlank, setActivePlank] = useState(null);

    let smallNav = useRef(null);
    let title = useRef(null);
    let seePlankjes = useRef(null);

    useEffect(() => {
        let plankjesArray = [];
        db.collection('plankjes').get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                plankjesArray.push(doc.data())
            })
            setPlankjes(plankjesArray);
        })
        // changeActivePlank();
        const tl = gsap.timeline(); //eslint-disable-line
        tl.to(title, {opacity: 1, duration: 1, delay: 1}); //eslint-disable-line
        tl.to(seePlankjes, {opacity: 1, duration: .5}); //eslint-disable-line
        tl.to(smallNav, {opacity: 1, duration: .5}); //eslint-disable-line
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', changeActivePlank)
        return () => {
            window.removeEventListener('scroll', changeActivePlank)
        }
    }, [])

    function changeActivePlank() {
        setActivePlank(Math.round((window.scrollX - window.innerWidth)/ window.innerWidth))
    }
    
    function getUniqueKey () {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
    
    function getPXValue (value) {
        return parseFloat(value) / 100 * window.innerWidth;
    }
    
    function scroll (plankNumber) {
        gsap.to(window, {duration: 1, scrollTo: {y: 0, x: getPXValue(plankNumber * 100 + 100)} }) //eslint-disable-line
    }

    function checkCart (item) {
        let exists = false;  //loop through cart and find if an array with this item object already exists
        for (let i = 0; i < props.cart.length; i++) {
          if (props.cart[i][0].name === item.name) {
            exists = true;
          }
        }
        return exists;
      }

    return (
        <div className="Store" >

            <Link to="/borrel-beter/cart">
                <div className="menu-button">
                    Cart
                </div>
            </Link>

            <div className="store-title">
                
                <div className="title" ref={ el => { title = el } }>
                    <div className="title-border"></div>
                    <h1>Borrel Beter</h1>
                    <div className="sub-title">
                        Plankjes, Hapjes en meer
                    </div>
                </div>

                <div className="see-plankjes-button" onClick={ () => scroll(0) } ref={ el => { seePlankjes = el } } >
                    See Plankjes
                </div>
            </div>

           { plankjes && plankjes.map((plankje, index) => {
               return <Plank index={ index } inCart={ checkCart(plankje) } key={ getUniqueKey() } plank={ plankje } addItem={ props.addItem } />
           }) }

           <div className="store-nav" ref={ el => smallNav = el }>
               { plankjes && plankjes.map((plankje, index) => {
                   return <div className="nav-circle"  id={`${ activePlank === index ? 'active' : '' }`} key={ index } onClick={ () => scroll(index) } ></div>    
               }) }
           </div>
        </div>
    )
}

export default Store