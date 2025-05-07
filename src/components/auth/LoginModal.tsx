import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Input from '../ui/Input/Input';
import Button from '../ui/Button/Button';
import Modal from '../ui/Modal/Modal';

// Type for location state to handle redirects after login
interface LocationState {
  from?: string;
  search?: string;
}

// Props for the LoginModal component
interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// OTP verification form component
const OtpVerificationForm: React.FC<{
  phoneNumber: string;
  onVerify: (otp: string) => Promise<boolean>;
  onCancel: () => void;
}> = ({ phoneNumber, onVerify, onCancel }) => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp || otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }

    setIsVerifying(true);
    const success = await onVerify(otp);
    if (!success) {
      setError('Invalid OTP. Please try again.');
    }
    setIsVerifying(false);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-brand-text mb-6">Verify OTP</h2>
      <p className="text-brand-textSecondary mb-4">
        We've sent a verification code to <span className="font-medium">{phoneNumber}</span>
      </p>
      
      <form onSubmit={handleSubmit}>
        <Input
          label="Enter 6-digit OTP"
          type="text"
          value={otp}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, '');
            if (value.length <= 6) {
              setOtp(value);
              setError('');
            }
          }}
          error={error}
          placeholder="Enter OTP"
          isRequired
          maxLength={6}
          className="mb-4"
        />

        <div className="flex flex-col gap-3">
          <Button
            type="submit"
            colorScheme="primary"
            variant="solid"
            isFullWidth
            isDisabled={isVerifying}
          >
            {isVerifying ? 'Verifying...' : 'Verify OTP'}
          </Button>
          
          <Button
            type="button"
            colorScheme="secondary"
            variant="outline"
            isFullWidth
            onClick={onCancel}
          >
            Cancel
          </Button>
        </div>

        <p className="mt-4 text-sm text-center text-brand-textSecondary">
          Didn't receive the code?{' '}
          <button 
            type="button" 
            className="text-brand-primary font-medium" 
            onClick={() => alert('OTP resent successfully!')}
          >
            Resend OTP
          </button>
        </p>
      </form>
    </div>
  );
};

// Phone Login form component
const PhoneLoginForm: React.FC<{
  onSubmit: (phoneNumber: string) => void;
  onToggleAdmin: () => void;
}> = ({ onSubmit, onToggleAdmin }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phoneNumber || phoneNumber.length !== 10) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }

    setIsLoading(true);
    // Simulate sending OTP
    setTimeout(() => {
      setIsLoading(false);
      onSubmit(phoneNumber);
    }, 1000);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-brand-text mb-6">Login to Your Account</h2>
      
      <form onSubmit={handleSubmit}>
        <Input
          label="Phone Number"
          type="tel"
          value={phoneNumber}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, '');
            if (value.length <= 10) {
              setPhoneNumber(value);
              setError('');
            }
          }}
          leftAddon="+91"
          error={error}
          placeholder="Enter your 10-digit phone number"
          isRequired
          maxLength={10}
          className="mb-6"
        />

        <Button
          type="submit"
          colorScheme="primary"
          variant="solid"
          isFullWidth
          isDisabled={isLoading}
          className="mb-4"
        >
          {isLoading ? 'Sending OTP...' : 'Send OTP'}
        </Button>

        <div className="text-center">
          <button
            type="button"
            className="text-sm text-brand-primary font-medium"
            onClick={onToggleAdmin}
          >
            Admin Login
          </button>
        </div>
      </form>
    </div>
  );
};

// Admin Login form component
const AdminLoginForm: React.FC<{
  onToggleAdmin: () => void;
}> = ({ onToggleAdmin }) => {
  const { login, error: authError, clearError } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await login(email, password);
      // If login successful, redirect to dashboard or previous location
      const state = location.state as LocationState | null;
      const from = state?.from || '/dashboard';
      navigate(from, { replace: true });
    } catch {
      // Error handling is done by useAuth
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-brand-text mb-6">Admin Login</h2>
      
      <form onSubmit={handleSubmit}>
        {authError && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm">
            {authError}
          </div>
        )}
        
        <Input
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (authError) clearError();
          }}
          placeholder="Enter your email"
          isRequired
          className="mb-4"
        />
        
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (authError) clearError();
          }}
          placeholder="Enter your password"
          isRequired
          className="mb-6"
        />

        <Button
          type="submit"
          colorScheme="primary"
          variant="solid"
          isFullWidth
          isDisabled={isLoading}
          className="mb-4"
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </Button>

        <div className="text-center">
          <button
            type="button"
            className="text-sm text-brand-primary font-medium"
            onClick={onToggleAdmin}
          >
            User Login
          </button>
        </div>
      </form>
    </div>
  );
};

// Main LoginModal Component
const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showOtpForm, setShowOtpForm] = useState(false);
  const { loginWithPhone, verifyOtp } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handlePhoneSubmit = async (phone: string) => {
    const success = await loginWithPhone(phone);
    if (success) {
      setPhoneNumber(phone);
      setShowOtpForm(true);
    }
  };

  const handleOtpVerify = async (otp: string): Promise<boolean> => {
    // Use the verifyOtp method from useAuth
    const success = await verifyOtp(phoneNumber, otp);
    if (success) {
      // Redirect to dashboard or previous location
      const state = location.state as LocationState | null;
      const from = state?.from || '/dashboard';
      navigate(from, { replace: true });
      onClose(); // Close the modal on successful login
    }
    return success;
  };

  const handleOtpCancel = () => {
    setShowOtpForm(false);
  };

  const toggleAdminLogin = () => {
    setIsAdminLogin(!isAdminLogin);
    setShowOtpForm(false);
  };

  // When the modal is closed, reset its state
  const handleClose = () => {
    setIsAdminLogin(false);
    setPhoneNumber('');
    setShowOtpForm(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      size="md"
      showCloseButton={true}
    >
      {isAdminLogin ? (
        <AdminLoginForm onToggleAdmin={toggleAdminLogin} />
      ) : showOtpForm ? (
        <OtpVerificationForm 
          phoneNumber={`+91 ${phoneNumber}`}
          onVerify={handleOtpVerify}
          onCancel={handleOtpCancel}
        />
      ) : (
        <PhoneLoginForm
          onSubmit={handlePhoneSubmit}
          onToggleAdmin={toggleAdminLogin}
        />
      )}
    </Modal>
  );
};

export default LoginModal; 