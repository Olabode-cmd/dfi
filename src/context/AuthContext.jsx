import { createContext, useContext, useState, useEffect } from "react";
import { getUserProfile } from "../services/user";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            getUserProfile()
                .then((userData) => {
                    setUser(userData);
                    setIsAuthenticated(true);
                })
                .catch(() => {
                    localStorage.removeItem("accessToken");
                    setIsAuthenticated(false);
                });
        }
    }, []);

    function logout() {
        localStorage.removeItem("accessToken");
        setUser(null);
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, setUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}