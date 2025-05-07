/**
 * User types for the application
 */

/**
 * User type representing an authenticated user
 */
export interface User {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  roles: string[];
}

/**
 * Authentication related types
 */
export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | null;
  error: string | null;
}

/**
 * Token payload structure (decoded JWT)
 */
export interface TokenPayload {
  sub: string; // user id
  name: string;
  email?: string;
  roles: string[];
  exp: number; // expiration timestamp
  iat: number; // issued at timestamp
} 