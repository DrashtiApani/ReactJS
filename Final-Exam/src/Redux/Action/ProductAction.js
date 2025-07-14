const ADD_PRODUCT = (data) => {
    return async (dispatch) => {
        try {
            let res = await fetch("http://localhost:3000/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: data.name,
                    price: data.price,
                    description: data.description,
                    imageUrl: data.imageUrl,
                    quantity: data.quantity
                })
            });

            let result = await res.json();

            dispatch({
                type: "ADD_PRODUCT",
                payload: result
            });
        } catch (error) {
            console.log("Error while adding product:", error);
        }
    };
};

const GET_PRODUCTS = () => {
    return async (dispatch) => {
        try {
            let res = await fetch("http://localhost:3000/products", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            let result = await res.json();

            dispatch({
                
                type: "GET_PRODUCTS",
                payload: result
            });
        } catch (error) {
            console.log("Error while fetching products:", error);
        }
    };
};


const DELETE_PRODUCT = (id) => {
    return async (dispatch) => {
        try {
            await fetch(`http://localhost:3000/products/${id}`, {
                method: "DELETE",
            });

            dispatch({
                type: "DELETE_PRODUCT",
                payload: id,
            });
        } catch (error) {
            console.log("Error deleting product:", error);
        }
    };
};

const UPDATE_PRODUCT = (id, data) => {
    return async (dispatch) => {
        try {
            const res = await fetch(`http://localhost:3000/products/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await res.json();

            dispatch({
                type: "UPDATE_PRODUCT",
                payload: result
            });
        } catch (error) {
            console.log("Error while updating product:", error);
        }
    };
};

export { ADD_PRODUCT, GET_PRODUCTS, DELETE_PRODUCT, UPDATE_PRODUCT };
