import React, { createContext, useContext, useState, useEffect } from 'react';
import { saveRegistrationToExcel } from '../utils/excelExport';

export interface UserData {
  name: string;
  email: string;
  password: string;
  phone?: string;
  address?: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  userData: UserData | null;
  login: (email: string, password: string) => boolean;
  register: (userData: UserData) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [users, setUsers] = useState<UserData[]>([]);

  // Load users and login state from localStorage on component mount
  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }

    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const register = (newUserData: UserData): boolean => {
    // Check if email already exists
    if (users.some(user => user.email === newUserData.email)) {
      return false;
    }

    const updatedUsers = [...users, newUserData];
    
    // Save to localStorage
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    
    // Save to Excel
    const excelSaved = saveRegistrationToExcel(newUserData);
    if (!excelSaved) {
      console.error('Failed to save registration data to Excel');
      return false;
    }
    
    // Auto login after registration
    setIsLoggedIn(true);
    setUserData(newUserData);
    localStorage.setItem('currentUser', JSON.stringify(newUserData));
    
    return true;
  };

  const login = (email: string, password: string): boolean => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setIsLoggedIn(true);
      setUserData(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    localStorage.removeItem('currentUser');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userData, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};