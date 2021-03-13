import { ADD_TO_CART, GET_NUMBERS_CART } from "../actions/types";

const initalState = { 
    cartNumbers: 0 
}

export default (state = initalState, action) => {
    switch(action.type) {
        case ADD_TO_CART: 
            return {
                cartNumbers: state.cartNumbers + 1 
            }
        case GET_NUMBERS_CART: 
            return { 
                ...state
            }
        default: 
            return state; 
        
    }
}