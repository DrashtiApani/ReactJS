const LOGIN_USER = (data) => {
    return async (dispatch) => {
        try {
            const res = await fetch(`http://localhost:3000/users?email=${data.email}&password=${data.password}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const result = await res.json();

            if (result.length > 0) {
                dispatch({ type: "LOGIN_USER", payload: result[0] });
            } else {
                alert("Invalid email or password");
            }
        } catch (error) {
            console.log("Error while login user:", error);
        }
    };
};

const LOGOUT_USER = () => {
    return (dispatch) => {
        dispatch({ type: "LOGOUT_USER" });
    };
};

const REGISTER_USER = (data) => {
    return async (dispatch) => {
        try {
            const res = await fetch(`http://localhost:3000/users`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (res.ok) {
                alert("Registration successful!");
            } else {
                alert("Registration failed");
            }
        } catch (error) {
            console.log("Error while registering user:", error);
        }
    };
};

export { LOGIN_USER, LOGOUT_USER, REGISTER_USER };