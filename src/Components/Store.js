import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Plank from './Plank'
import { db } from '../firebase' 
import Knife from '../knife.png'
import Towel from '../towel.png'

function Store(props) {

    const [plankjes, setPlankjes] = useState(null);
    const [activePlank, setActivePlank] = useState(null);

    let smallNav = useRef(null);

    useEffect(() => {
        let plankjesArray = [];
        db.collection('plankjes').get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                plankjesArray.push(doc.data())
            })
            setPlankjes(plankjesArray);
        })
        changeActivePlank();
        gsap.to(smallNav, {opacity: 1, duration: 1, delay: .5}); //eslint-disable-line
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
        if (props.cart.includes(item)) {
            return true
        } else {
            return false
        }
    }
    

    return (
        <div className="Store" >

            <Link to="/borrel-beter/cart">
                <div className="menu-button">
                    Cart
                </div>
            </Link>

            <div className="store-title">
                <div className="knife">
                    <img src={ Knife } alt=""/>
                </div>
                
                <div className="towel">
                    <img src={ Towel } alt=""/>
                </div>
                Borrel Beter
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