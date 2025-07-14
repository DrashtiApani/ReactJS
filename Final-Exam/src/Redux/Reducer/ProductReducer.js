const initialstate = {
    products: [],
    err : null
}

const ProductReducer = (state = initialstate, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return {
                ...state,
                products: [
                    ...state.products,
                    action.payload]
            }

        case "GET_PRODUCTS":
            return {
                ...state,
                products: action.payload
            }

        case "DELETE_PRODUCT":
            return {
                ...state,
                products: state.products.filter(
                    product => product.id !== action.payload
                )
            };
            
        case "UPDATE_PRODUCT":
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.payload.id ? action.payload : product
                )
            };

        default:
            return state
    }
};

export default ProductReducer