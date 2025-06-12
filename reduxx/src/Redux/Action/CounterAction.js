const increment = () =>{
    return {
        type : "inc"
    }
}

const decrement = () => {
    return {
        type : "dec"
    }
}

export {increment, decrement}