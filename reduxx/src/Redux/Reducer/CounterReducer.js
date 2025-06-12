let initialisation = 0;

const counter = (state = initialisation, action) => {
    switch (action.type) {
        case "inc":
            return state + 1;
            
        case "dec":
            return state - 1;
        default:
            return state;
    }
}

export default counter
