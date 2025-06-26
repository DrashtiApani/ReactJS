const initialState = {
  users: []
};

const crudReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'adduser':
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    case 'setusers':
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
};

export default crudReducer;
