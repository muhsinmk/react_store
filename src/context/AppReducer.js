export const initialState = {
    siteName:"React Shop",
    cart:[],
    products:[],
    products_loading: true
}

export const reducer = (prevState,action) => {
    switch(action.type){

        // Fetched products from server
        case "PRODUCTS_LOADED":
            return {...prevState, products:[...action.payload], products_loading:false} 

        // ADD Product to Cart
        case "ADD_TO_CART": 
            return {...prevState, cart:[...prevState.cart,action.payload] }   

        // Increase Product Count 
        case "INCREASE_PRODUCT_COUNT":
            let incrementedCart = prevState.cart.map(item => {
                if(item.id === action.payload){
                    return {...item, count: item.count + 1}
                }
                return item
            })
            return {...prevState, cart:[...incrementedCart]} 

        // Decrease Product Count 
        case "DECREASE_PRODUCT_COUNT":
            let decrementedCart = prevState.cart.map(item => {
                if(item.id === action.payload){
                    return {...item, count: item.count - 1}
                }
                return item
            })
            return {...prevState, cart:[...decrementedCart]}  

        // clearing cart
        case "CLEAR_CART":
            return {...prevState, cart:[]}

        // removing a product
        case "REMOVE_PRODUCT":
            return {...prevState, cart: prevState.cart.filter(item => item.id !== action.payload)}

        default:
            return prevState    
    }
}