const  GET_PRODUCT = () => {
    return async (dispatch) =>{
        let data = await fetch(`https://dummyjson.com/products`)
        let res = await data.json()

        console.log(res.products);
        

        dispatch({
            type: "GET_PRODUCT", 
            payload: res.products
        })
    }
}

export default GET_PRODUCT