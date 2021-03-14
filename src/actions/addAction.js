import { ADD_TO_CART } from './types'

export const addCart = (productName) => { 
    return (dispatch) => {
        console.log("Adding to Cart");
        console.log('Product: ', productName);
        dispatch({
            type: ADD_TO_CART,
            payload: productName 
        });
    }
}