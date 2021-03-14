import { ADD_TO_CART, GET_NUMBERS_CART } from "../actions/types";

const initalState = { 
    cartNumbers: 0, 
    cartCost: 0, 
    products: {
        SimpleAndCleanMP3: { 
            name: "Simple and Clean MP3",
            price: 1.29,
            numbers: 0,
            inCart: false 
        },
        BeneathTheMaskMP3: {
            name: "Beneath The Mask MP3",
            price: 1.29, 
            numbers: 0,
            inCart: false 
        },
        MarioRapMP3: {
            name: "Mario Rap MP3",
            price: 1.29,
            numbers: 0,
            inCart: false 
        },
        FlyingRacoonSuitTShirt: { 
            name: "Flying Raccoon Suit T-Shirt",
            price: 20.00,
            numbers: 0,
            inCart: false 
        },
        FlyingRaccoonSuitTank: {
            name: "Flying Raccoon Suit Tank",
            price: 20.00,
            numbers: 0,
            inCart: false 
        },
        FlyingRacoonSuitVinyl: {
            name: "Flying Racoon Suit Vinyl 'Afterglow' ",
            price: 20.00,
            numbers: 0,
            inCart: false 
        }
    }
}

export default (state = initalState, action) => {
    switch(action.type) {
        case ADD_TO_CART: 
            let addQuantity = {...state.products[action.payload]}
            console.log(addQuantity)
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