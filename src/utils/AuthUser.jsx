// AuthUserContext.js
import { createContext, useState, useEffect } from "react";

const AuthUserContext = createContext({
  auth: {
    isAuthenticated: false,
    setIsAuthenticated: () => {},
  },
});

export const AuthUserProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  useEffect(() => {
    // Update localStorage when isAuthenticated changes
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <AuthUserContext.Provider
      value={{ auth: { isAuthenticated, setIsAuthenticated } }}
    >
      {children}
    </AuthUserContext.Provider>
  );
};

export default AuthUserContext;
