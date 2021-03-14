import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getNumbers } from '../actions/getAction'
import { Link } from 'react-router-dom'



function Navbar(props) {

    useEffect(() => {
        getNumbers();
    }, [])

    return (
        <header>
          <div className="overlay"></div>
          <nav>
            <h2>Sorry We're Late</h2>
            <ul>
              <li><Link to="/Products">Home</Link></li>
              <li><Link to="/About">About</Link></li>
              <li><Link to='/'>Products</Link></li>
              <li className="cart"><Link to="/Cart">
              <ion-icon name="cart"></ion-icon>Cart<span>{props.cartProps.cartNumbers}</span>
              </Link></li>
            </ul>
          </nav>
        </header>
    );
}

const mapStateToProps = state => ({
  cartProps: state.cartState
})

export default connect(mapStateToProps, { getNumbers } )(Navbar);