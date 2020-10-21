import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Video from '../video.mp4'

function Home() {

    let borrelen = useRef(null);
    let is = useRef(null);
    let belangrijk = useRef(null);
    let container = useRef(null);
    let borrel = useRef(null);
    let beter = useRef(null);
    let link = useRef(null);


    useEffect(() => {
        const tl = gsap.timeline(); //eslint-disable-line
        tl.to(borrelen, {opacity: 1, duration: .5, delay: 2});
        tl.to(is, {opacity: 1, duration: .5});
        tl.to(belangrijk, {opacity: 1, duration: .5});
        tl.to(container, {opacity: 0, duration: .5, delay: 1});
        tl.to(borrel, {opacity: 1, duration: .5});
        tl.to(beter, {opacity: 1, duration: .5});
        tl.to(link, {opacity: 1, duration: .5});
    }, [])

    return (
        <div className="Home">
            <video autoPlay muted loop>
                <source src={Video} />
            </video>

            <div className="container" ref={ el => container = el }>
                <span className="borrelen" ref={ el => borrelen = el } >Borrelen</span>
                <span className="is" ref={ el => is = el }>is</span>
                <span className="belangrijk" ref={ el => belangrijk = el }>belangrijk.</span>
            </div>

            <div className="title">
                <span ref={ el => borrel = el }>Borrel</span>
                <span className="beter" ref={ el=> beter = el }>beter.</span>
            </div>

            <Link to="/borrel-beter/store">
                <div className="store-link" ref={ el => link =el }>
                    Plankjes
                </div>
            </Link>
        </div>
    )
}

export default Home