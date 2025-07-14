let initialstate = {
  user: [],
  err: null,
  loginUser: JSON.parse(localStorage.getItem("user")) || null
};

const AuthReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        loginUser: action.payload
      };

    case "LOGOUT_USER":
      localStorage.removeItem("user");
      return {
        ...state,
        loginUser: null
      };

    default:
      return state;
  }
};

export default AuthReducer;
