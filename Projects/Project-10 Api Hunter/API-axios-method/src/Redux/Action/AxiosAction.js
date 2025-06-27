import axios from "axios"


const GET_RECIPES = () => {
    try {
        return (dispatch) => {
            axios.get(`https://dummyjson.com/recipes`)
                .then((res) => {
                    dispatch({
                        type: "GET_RECIPES",
                        payload: res.data.recipes
                    })
                })
        }

    } catch (err) {
        console.log(err)
        return false
    }
}

export default GET_RECIPES