const theme = {
  colors: {
    brand: {
      primary: '#DC143C', // Crimson
      primaryHover: '#A10D2F',
      primaryLight: '#FF4B6E',
      background: '#FFFFFF',
      surface: '#F8F9FA',
      surfaceHover: '#F3F4F6',
      text: '#222222',
      textLight: '#FFFFFF',
      muted: '#6B7280',
      border: '#E5E7EB',
      success: '#22C55E',
      warning: '#F59E42',
      error: '#EF4444',
      info: '#3B82F6',
    },
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '40px',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  typography: {
    fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
    fontSize: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '20px',
      xl: '24px',
      '2xl': '32px',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
  },
};

export default theme;
