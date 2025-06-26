const initialState = {
    users: JSON.parse(localStorage.getItem('users')) || []
}

const Crud = (state = initialState, action) => {
    switch (action.type) {

        case 'adduser':
            const updatedUsers = [...state.users, action.payload];
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            return {
                ...state,
                users: updatedUsers
            };
        case 'deleteuser':
            const filtered = state.users.filter(user => user.id !== action.payload);
            localStorage.setItem('users', JSON.stringify(filtered));
            return {
                ...state,
                users: filtered
            };

        case 'updateuser':
            const updatedUserList = state.users.map(user =>
                user.id === action.payload.id ? action.payload : user
            );
            localStorage.setItem('users', JSON.stringify(updatedUserList));
            return {
                ...state,
                users: updatedUserList
            };


        default:
            return state;
    }
};

export default Crud