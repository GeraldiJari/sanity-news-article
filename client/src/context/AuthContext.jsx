import { createContext, useContext, useEffect, useState } from "react";
import { login as apiLogin, register as apiRegister, me } from "../api/auth.api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const res = await me();
      setUser(res.data);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (data) => {
    const res = await apiLogin(data);
    localStorage.setItem("token", res.data.token);
    await fetchUser();
  };

  const register = async (data) => {
    const res = await apiRegister(data);
    localStorage.setItem("token", res.data.token);
    await fetchUser();
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, loading, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
