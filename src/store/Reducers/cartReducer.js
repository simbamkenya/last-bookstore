import { ADD_ITEM, REMOVE_ITEM, CLEAR_CART, REDUCE_COUNT, ADD_COUNT, COUNT_ITEMS } from '../Actions/actionTypes'

const initialState ={
    cartItems: [
    // { bookId: 1, bookName : "Master Of The Game", price: 35, category: "thrill", url: 'master_of_the_game.jpg'},
    // { bookId: 2, bookName : "Tell Me Your Dreams", price: 45, category: "detective", url: 'tell_me_your_dreams.jpg'},
    // { bookId: 3, bookName : "If Tomorrow Comes", price: 30, category: "thrill", url: 'if_tomorrow_comes.jpg'}
    ],
    totalPrice: 0
} 
export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
                totalPrice: state.totalPrice + action.payload.price  
            }
        case REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem !== action.payload),
                totalPrice: state.totalPrice - action.payload.price
            }
        case CLEAR_CART:
            return {
                ...initialState
            }
        case REDUCE_COUNT: 
            return {
                ...state,
                cartItems: state.cartItems.splice(0, state.cartItems.length - 1),
                totalPrice: state.totalPrice - action.payload.price
            }
        case ADD_COUNT: 
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
                totalPrice: state.totalPrice + action.payload.price
            }
        case COUNT_ITEMS: 
            return {
                ...state,
                
            }
        default:
            return state;
    }
}