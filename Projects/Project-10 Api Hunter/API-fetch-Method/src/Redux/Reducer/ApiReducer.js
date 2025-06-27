let initialiState = {
    products: []

};

const ApiReducer = (state = initialiState, action) => {
    
    switch (action.type) {
        case "GET_PRODUCT":
            return {
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
}

export default ApiReducer