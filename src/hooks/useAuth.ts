import { useState, useEffect, useCallback } from 'react';
import type { User, AuthState } from '../types/user';
import { LoginModel } from '../models/auth/LoginModel';
import type { EmailPasswordCredentials, PhoneCredentials, OtpVerification } from '../models/auth/LoginModel';

export interface UseAuthReturn {
  isAuthenticated: boolean;
  isLoading: boolean;
  isAdmin: boolean;
  user: User | null;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  loginWithPhone: (phoneNumber: string) => Promise<boolean>;
  verifyOtp: (phoneNumber: string, otp: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  clearError: () => void;
}

/**
 * Authentication hook to handle user auth state
 */
const useAuth = (): UseAuthReturn => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    isLoading: true, // Start with loading state
    user: null,
    error: null,
  });

  // Create an instance of LoginModel
  const loginModel = new LoginModel();

  // Check for existing session on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = loginModel.getCurrentUser();
        
        if (user) {
          setAuthState({
            isAuthenticated: true,
            isLoading: false,
            user,
            error: null,
          });
        } else {
          setAuthState({
            isAuthenticated: false,
            isLoading: false,
            user: null,
            error: null,
          });
        }
      } catch {
        setAuthState({
          isAuthenticated: false,
          isLoading: false,
          user: null,
          error: 'Failed to restore authentication state',
        });
      }
    };

    checkAuth();
  }, []);

  // Email Password Login method
  const login = useCallback(async (email: string, password: string) => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      
      const credentials: EmailPasswordCredentials = { email, password };
      const response = await loginModel.loginWithEmailPassword(credentials);
      
      if (response.success && response.user) {
        setAuthState({
          isAuthenticated: true,
          isLoading: false,
          user: response.user,
          error: null,
        });
      } else {
        setAuthState(prev => ({
          ...prev,
          isLoading: false,
          error: response.error || 'Login failed',
        }));
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred during login';
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: errorMessage,
      }));
    }
  }, []);

  // Phone number login (sends OTP)
  const loginWithPhone = useCallback(async (phoneNumber: string): Promise<boolean> => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      
      const credentials: PhoneCredentials = { phoneNumber };
      const response = await loginModel.requestOtp(credentials);
      
      setAuthState(prev => ({ 
        ...prev, 
        isLoading: false,
        error: response.success ? null : (response.error || 'Failed to send OTP')
      }));
      
      return response.success;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to send OTP';
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: errorMessage,
      }));
      return false;
    }
  }, []);

  // Verify OTP for phone login
  const verifyOtp = useCallback(async (phoneNumber: string, otp: string): Promise<boolean> => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      
      const verification: OtpVerification = { phoneNumber, otp };
      const response = await loginModel.verifyOtp(verification);
      
      if (response.success && response.user) {
        setAuthState({
          isAuthenticated: true,
          isLoading: false,
          user: response.user,
          error: null,
        });
        return true;
      } else {
        setAuthState(prev => ({
          ...prev,
          isLoading: false,
          error: response.error || 'Invalid OTP',
        }));
        return false;
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to verify OTP';
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: errorMessage,
      }));
      return false;
    }
  }, []);

  // Register method
  const register = useCallback(async (name: string, email: string, password: string) => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      
      // Simulate API request delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Validate password strength
      const hasStrongPassword = password.length >= 8;
      
      const user: User = {
        id: Math.random().toString(36).substring(2, 9),
        name,
        email,
        roles: ['user'],
      };
      
      // Use the same storage as LoginModel
      localStorage.setItem('user', JSON.stringify(user));
      
      setAuthState({
        isAuthenticated: true,
        isLoading: false,
        user,
        error: hasStrongPassword ? null : 'Warning: Consider using a stronger password',
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred during registration';
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: errorMessage,
      }));
    }
  }, []);

  // Logout method
  const logout = useCallback(() => {
    loginModel.logout();
    setAuthState({
      isAuthenticated: false,
      isLoading: false,
      user: null,
      error: null,
    });
  }, []);

  // Clear error method
  const clearError = useCallback(() => {
    setAuthState(prev => ({ ...prev, error: null }));
  }, []);

  // Check if user has admin role
  const isAdmin = authState.user?.roles?.includes('admin') || false;

  return {
    isAuthenticated: authState.isAuthenticated,
    isLoading: authState.isLoading,
    isAdmin,
    user: authState.user,
    error: authState.error,
    login,
    loginWithPhone,
    verifyOtp,
    register,
    logout,
    clearError,
  };
};

export default useAuth; 