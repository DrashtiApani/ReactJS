import { createContext, useState } from "react";

export const MyCrudContext = createContext();

const CrudProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const addUser = (data) => {
    const newUser = { ...data, id: Date.now() };
    setUsers([...users, newUser]);
  };

//   const deleteUser = (id) => {
//     setUsers(users.filter(user => user.id !== id));
//   };

//   const updateUser = (updatedUser) => {
//     setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
//   };

  return (
    <MyCrudContext.Provider value={{  addUser }}>
      {children}
    </MyCrudContext.Provider>
  );
};

export default CrudProvider;
