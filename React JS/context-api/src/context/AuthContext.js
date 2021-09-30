import { createContext, useState } from "react";

const AuthContext = createContext();

const initialAuth = null;

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialAuth);

  const handleAuth = (e) => {
    setAuth(auth ? null : true);
  };
  const data = { auth, handleAuth };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };

export default AuthContext;
