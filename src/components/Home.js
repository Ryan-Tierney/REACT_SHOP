import React, { useState } from 'react'
import SCMP3 from '../images/SimpleAndClean.jpg'
import BTMMP3 from '../images/BeneathTheMask.jpg'
import MRMP3 from '../images/MarioRap.jpg'
import FRST from '../images/FRStshirt.webp'
import FRSTT from '../images/frstanktop.webp'
import FRSAG from '../images/FRSafterglow.webp'
import { connect } from 'react-redux'
import { addCart } from '../actions/addAction';

const Home = (props) => {
    console.log(props);
    return(
        <div className="container">
            <div className="image">
                <img src={SCMP3} alt="Simple and Clean MP3" />
                <h3> Simple and Clean </h3>
                <h3> $1.29 </h3>
                <a onClick={props.addCart} className="addtocart cart1" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={BTMMP3} alt="Beneath The Mask MP3" />
                <h3> Beneath The Mask </h3>
                <h3> $1.29 </h3>
                <a  className="addtocart cart2" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={MRMP3} alt="Mario Rap MP3" />
                <h3> Mario Rap </h3>
                <h3> $1.29 </h3>
                <a onClick={props.addCart} className="addtocart cart3" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={FRST} alt="Flying Raccoon Suit T-Shirt" />
                <h3> Flying Raccoon Suit T-Shirt </h3>
                <h3> $20.00 </h3>
                <a onClick={props.addCart} className="addtocart cart4" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={FRSTT} alt="Flying Raccoon Suit Tank" />
                <h3> Flying Raccoon Suit Tank </h3>
                <h3> $20.00 </h3>
                <a onClick={props.addCart} className="addtocart cart5" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={FRSAG} alt="Flying Raccoon Suit Vinyl 'Afterglow' " />
                <h3> Flying Raccoon Suit Vinyl 'Afterglow' </h3>
                <h3> $20.00 </h3>
                <a onClick={props.addCart} className="addtocart cart6" href="#">Add to Cart</a>
            </div>
        </div>
    )
}

export default connect(null, { addCart } )(Home);