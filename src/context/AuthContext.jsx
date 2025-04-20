import { createContext, useContext, useState, useEffect } from 'react';
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

// AuthProvider component that wraps your app and provides the AuthContext
export const AuthProvider = ({ children }) => {
  // Initialize user state from sessionStorage
  const [user, setUser] = useState(() => {
    const storedUser = sessionStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Effect to update sessionStorage when user state changes
  useEffect(() => {
    if (user) {
      sessionStorage.setItem('user', JSON.stringify(user));
    } else {
      sessionStorage.removeItem('user');
    }
  }, [user]);

  // Login function
  const login = (username, password) => {
    // Here you would typically make an API call to authenticate the user
    // For demonstration, we'll assume any non-empty credentials are valid
    if (username && password) {
      const userData = { username };
      setUser(userData);
      return true;
    }
    return false;
  };

  // Logout function
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
