import type { User } from '../../types/user';

// Login credentials types
export interface EmailPasswordCredentials {
  email: string;
  password: string;
}

export interface PhoneCredentials {
  phoneNumber: string;
}

export interface OtpVerification {
  phoneNumber: string;
  otp: string;
}

// Login response type
export interface LoginResponse {
  success: boolean;
  user?: User;
  error?: string;
  token?: string;
}

/**
 * LoginModel - Handles authentication operations
 */
export class LoginModel {
  private tokenKey: string = 'auth_token';
  private userKey: string = 'user';
  
  /**
   * Login with email and password
   */
  async loginWithEmailPassword(credentials: EmailPasswordCredentials): Promise<LoginResponse> {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (credentials.email === 'admin@example.com' && credentials.password === 'password') {
        const user: User = {
          id: '1',
          name: 'Admin User',
          email: credentials.email,
          roles: ['admin', 'user'],
        };
        
        localStorage.setItem(this.userKey, JSON.stringify(user));
        localStorage.setItem(this.tokenKey, 'mock-jwt-token-admin');
        
        return {
          success: true,
          user,
          token: 'mock-jwt-token-admin'
        };
      } else if (credentials.email === 'user@example.com' && credentials.password === 'password') {
        const user: User = {
          id: '2',
          name: 'Regular User',
          email: credentials.email,
          roles: ['user'],
        };
        
        localStorage.setItem(this.userKey, JSON.stringify(user));
        localStorage.setItem(this.tokenKey, 'mock-jwt-token-user');
        
        return {
          success: true,
          user,
          token: 'mock-jwt-token-user'
        };
      }
      
      return {
        success: false,
        error: 'Invalid email or password'
      };
    } catch {
      return {
        success: false,
        error: 'An error occurred during login'
      };
    }
  }
  
  /**
   * Request OTP for phone login
   */
  async requestOtp(credentials: PhoneCredentials): Promise<LoginResponse> {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      sessionStorage.setItem('pendingPhoneAuth', credentials.phoneNumber);
      
      return {
        success: true
      };
    } catch {
      return {
        success: false,
        error: 'Failed to send OTP'
      };
    }
  }
  
  /**
   * Verify OTP for phone login
   */
  async verifyOtp(verification: OtpVerification): Promise<LoginResponse> {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (verification.otp === '123456') {
        const user: User = {
          id: Math.random().toString(36).substring(2, 9),
          name: `User ${verification.phoneNumber.substring(6)}`,
          phone: verification.phoneNumber,
          roles: ['user'],
        };
        
        localStorage.setItem(this.userKey, JSON.stringify(user));
        localStorage.setItem(this.tokenKey, `mock-jwt-token-${user.id}`);
        sessionStorage.removeItem('pendingPhoneAuth');
        
        return {
          success: true,
          user,
          token: `mock-jwt-token-${user.id}`
        };
      }
      
      return {
        success: false,
        error: 'Invalid OTP'
      };
    } catch {
      return {
        success: false,
        error: 'Failed to verify OTP'
      };
    }
  }
  
  /**
   * Logout current user
   */
  logout(): void {
    localStorage.removeItem(this.userKey);
    localStorage.removeItem(this.tokenKey);
    sessionStorage.removeItem('pendingPhoneAuth');
  }
  
  /**
   * Get current user
   */
  getCurrentUser(): User | null {
    const userJson = localStorage.getItem(this.userKey);
    if (!userJson) return null;
    
    try {
      return JSON.parse(userJson) as User;
    } catch {
      return null;
    }
  }
  
  /**
   * Get auth token
   */
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
} 