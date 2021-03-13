import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getNumbers } from '../actions/getAction'



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
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href='#'>Products</a></li>
              <li className="cart"><a href="#">
              <ion-icon name="cart"></ion-icon>Cart<span>{props.cartProps.cartNumbers}</span>
              </a></li>
            </ul>
          </nav>
        </header>
    );
}

const mapStateToProps = state => ({
  cartProps: state.cartState
})

export default connect(mapStateToProps, { getNumbers } )(Navbar);