const ADD_USER = (data) => {
    return {
        type: 'adduser',
        payload: data
    }
}

const DELETE_USER = (id) => {
    return {
        type: 'deleteuser',
        payload: id
    };
};
const UPDATE_USER = (data) => {
    return {
        type: 'updateuser',
        payload: data
    }
}

export { ADD_USER, DELETE_USER, UPDATE_USER };


