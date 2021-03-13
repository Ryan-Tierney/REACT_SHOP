import { ADD_TO_CART } from './types'

export const addCart = () => { 
    return (dispatch) => {
        console.log("Adding to Cart");
        dispatch({
            type: ADD_TO_CART
        });
    }
}