
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  name: string;
  email: string;
  role: 'advertiser' | 'publisher';
  isVerified: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password?: string, role?: 'advertiser' | 'publisher') => void;
  signup: (email: string, name: string, role: 'advertiser' | 'publisher') => string;
  verifyOtp: (otp: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
  isVerified: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [generatedOtp, setGeneratedOtp] = useState<string | null>(null);

  // Load user from "DB" (LocalStorage) on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('pva_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (email: string, password?: string, role: 'advertiser' | 'publisher' = 'advertiser') => {
    // SIMULATED BACKEND: In a real app, this would query a DB.
    // We'll check if a user exists in localStorage with this email.
    const storedUser = localStorage.getItem('pva_user');
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      // In a real app, we'd verify email, password AND role.
      if (parsed.email === email) {
        // For demo: if the role doesn't match the one requested, we'll update it
        // to show the requested dashboard, assuming the user is "switching" or choosing a mode.
        const updatedUser = { ...parsed, role };
        setUser(updatedUser);
        localStorage.setItem('pva_user', JSON.stringify(updatedUser));
        return;
      }
    }
    
    // Fallback for demo: Create a verified session with the selected role if no record found
    const newUser: User = { 
      name: role === 'publisher' ? 'Demo Publisher' : 'Demo Advertiser', 
      email, 
      role, 
      isVerified: true 
    };
    setUser(newUser);
    localStorage.setItem('pva_user', JSON.stringify(newUser));
  };

  const signup = (email: string, name: string, role: 'advertiser' | 'publisher') => {
    // 1. Create the user object in an "unverified" state
    const newUser: User = { name, email, role, isVerified: false };
    
    // 2. Generate a random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    
    // 3. Store OTP in memory and user in "DB"
    setGeneratedOtp(otp);
    setUser(newUser);
    localStorage.setItem('pva_user', JSON.stringify(newUser));
    
    // 4. SIMULATE EMAIL SENDING
    console.log(`%c [PVA AUTH SYSTEM] OTP for ${email}: ${otp} `, 'background: #2563eb; color: #fff; padding: 5px; border-radius: 5px;');
    alert(`DEBUG: Your OTP is ${otp}. (Check console for real flow simulation)`);
    
    return otp;
  };

  const verifyOtp = (otp: string): boolean => {
    // Check if the input matches our "server-side" stored OTP
    if (otp === generatedOtp && user) {
      // Transition user to fully verified state
      const verifiedUser = { ...user, isVerified: true };
      setUser(verifiedUser);
      
      // Update our "DB"
      localStorage.setItem('pva_user', JSON.stringify(verifiedUser));
      
      // Clear OTP so it can't be used again
      setGeneratedOtp(null);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setGeneratedOtp(null);
    localStorage.removeItem('pva_user');
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      signup, 
      verifyOtp, 
      logout, 
      isAuthenticated: !!user,
      isVerified: user?.isVerified || false
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
