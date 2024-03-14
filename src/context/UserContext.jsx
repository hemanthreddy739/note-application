import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextInfo = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextInfo;
