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
  register: (userData: UserData) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

  const register = async (newUserData: UserData): Promise<boolean> => {
    // Check if email already exists
    if (users.some(user => user.email === newUserData.email)) {
      console.log('Пользователь с таким email уже существует');
      return false;
    }

    try {
      console.log('Отправка данных на сервер:', newUserData);
      // Send registration data to server
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUserData),
      });

      const responseData = await response.json();
      console.log('Ответ от сервера:', responseData);

      if (!response.ok) {
        console.error('Ошибка при регистрации:', responseData.error);
        return false;
      }

      const updatedUsers = [...users, newUserData];
      
      // Save to localStorage
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      setUsers(updatedUsers);
      
      // Auto login after registration
      setIsLoggedIn(true);
      setUserData(newUserData);
      localStorage.setItem('currentUser', JSON.stringify(newUserData));
      
      console.log('Регистрация успешно завершена');
      return true;
    } catch (error) {
      console.error('Ошибка при регистрации:', error);
      return false;
    }
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

  const value = {
    isLoggedIn,
    userData,
    login,
    register,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };