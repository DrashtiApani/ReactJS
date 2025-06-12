let initialState = {
    users : JSON.parse(localStorage.getItem('users')) || []
}

const Crud = (state=initialState,action) => {
    switch(action.type){
        case 'adduser':
            let old = [...state.users,action.payload]
            localStorage.setItem('users',JSON.stringify(old));
            return {
                ...state,
                users : old
            }

        default:
            return state
    }
}
export default Crud;