let initialiState = {
    recipes: [],
    error: null

};



const AxiosReducer = ( state = initialiState, action) => {
  
    switch (action.type) {
        case "GET_RECIPES":
            return {
                ...state,
                recipes: action.payload
            }
        default:
            return state;
    }

}

export default AxiosReducer
