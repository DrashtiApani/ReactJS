export const ADD_USER = (data) => {
  return async (dispatch) => {
    try {
      let response = await fetch("http://localhost:8000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email
        })
      });

      let res = await response.json();

      dispatch({
        type: "adduser",
        payload: res
      });
      
    } catch (err) {
      console.log("Error adding user:", err);
    }
  };
};

 export const GET_USERS = () => {
  return async (dispatch) => {
    try {
      let data = await fetch("http://localhost:8000/users",{
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      let res = await data.json();

      dispatch({
        type: "setusers",
        payload: res
      });

    } catch (err) {
      console.log("Error getting users:", err);
    }
  };
};


