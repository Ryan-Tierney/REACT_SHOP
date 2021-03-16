import React, { Fragment } from 'react' 
import { connect } from 'react-redux'
import SCMP3 from '../images/SimpleAndClean.jpg'
import BTMMP3 from '../images/BeneathTheMask.jpg'
import MRMP3 from '../images/MarioRap.jpg'
import FRST from '../images/FRStshirt.webp'
import FRSTT from '../images/frstanktop.webp'
import FRSAG from '../images/FRSafterglow.webp'


function Cart({ cartProps }) {
    console.log(cartProps)

    let productsInCart = [];

    Object.keys(cartProps.products).forEach( function(item) { 
        console.log(item);
        console.log(cartProps.products[item].inCart);
        if(cartProps.products[item].inCart) {
            productsInCart.push(cartProps.products[item])
        }
        console.log(productsInCart);
    })

    const productImages = [SCMP3, BTMMP3, MRMP3, FRST, FRSTT, FRSAG]

    productsInCart = productsInCart.map( (product, index) => {
        return (
            <Fragment>
                <div className="product"><ion-icon name="close-circle"></ion-icon><img src={productImages[index]}/>
                    <span className="sm-hide">{product.name}</span>
                </div>
                <div className="price sm-hide">${product.price}.00</div>
                <div className="quantity">
                    <ion-icon className="decrease" name="arrow-back-circle-outline"></ion-icon>
                        <span>{product.numbers}</span>
                    <ion-icon className="increase" name="arrow-forward-circle-outline"></ion-icon>
                </div>
                <div className="total">${product.numbers * product.price}.00</div>
            </Fragment>
        )
    })

    return (
        <div className="container-products">
            <div className="product-header">
                <h5 className="product-title">PRODUCT</h5>
                <h5 className="price sm-hide">PRICE</h5>
                <h5 className="quantity">QUANTITY</h5>            
                <h5 className="total">TOTAL</h5>            
            </div>
            <div className="products">
                { productsInCart }
            </div>
            <div className="cartTotalContainer">
                <h4 className="cartTotalTitle">Cart Total</h4>
                <h4 className="cartTotal">{cartProps.cartCost}.00</h4>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    cartProps: state.cartState
});

export default connect(mapStateToProps)(Cart);