import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 min-h-[70vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-brand-primary">404</h1>
        <div className="mt-4 mb-8">
          <h2 className="text-3xl font-bold text-brand-text mb-2">
            Page Not Found
          </h2>
          <p className="text-lg text-brand-muted">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 border border-brand-primary text-brand-primary font-medium rounded-md hover:bg-brand-primary/10 transition-colors"
          >
            Go Back
          </button>
          <Link
            to="/"
            className="px-6 py-3 bg-brand-primary text-white font-medium rounded-md hover:bg-brand-primary/90 transition-colors"
          >
            Return Home
          </Link>
        </div>

        {/* Illustration */}
        <div className="mt-12 max-w-sm mx-auto">
          <svg
            viewBox="0 0 480 360"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <defs>
              <linearGradient id="BG" x1="19.496%" x2="77.479%" y1="71.822%" y2="16.69%">
                <stop offset="0%" stopColor="rgb(var(--color-brand-primary))" stopOpacity=".2" />
                <stop offset="100%" stopColor="rgb(var(--color-brand-primary))" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              fill="url(#BG)"
              fillRule="nonzero"
              d="M0 198.78c0 41.458 14.951 79.236 39.738 108.561h-.001z"
            />
            <path
              fill="rgb(var(--color-brand-primary))"
              fillRule="nonzero"
              d="M150.349 318.47c-10.883 9.8-8.486 31.044 12.264 48.265 20.75 17.221 39.783 8.807 41.613-21.595 1.202-19.978-31.98-43.655-53.877-26.67z"
              opacity=".1"
            />
            <path
              fill="rgb(var(--color-brand-primary))"
              fillRule="nonzero"
              d="M331.25 353.003c-33.397 51.17-105.673 60.289-170.305 49.627-64.633-10.662-93.05-67.098-59.654-118.268 33.397-51.17 81.528-44.021 146.16-33.359 64.633 10.662 117.197 50.83 83.799 102z"
              opacity=".1"
            />
            <path
              fill="rgb(var(--color-brand-primary))"
              fillRule="nonzero"
              d="M249.892 289.8c24.968-4.334 53.888 30.252 71.01 62.078 17.123 31.825 31.171 73.267 10.032 81.633-21.139 8.365-55.532-11.907-81.278-38.577-25.745-26.671-19.435-52.755-22.842-77.484-3.406-24.73-1.757-23.255 23.078-27.65z"
              opacity=".1"
            />
            <path
              fill="rgb(var(--color-brand-primary))"
              d="M253.011 231.101c46.24-29.349 115.15 39.36 138.488 61.95 23.337 22.59 71.334 98.305-7.066 143.887-78.4 45.582-178.404-45.628-181.077-77.372-2.674-31.744 3.415-98.716 49.655-128.465z"
              opacity=".1"
            />
            <path
              stroke="rgb(var(--color-brand-primary))"
              strokeWidth="2"
              d="M230 80c18.009 9.79 31 35.983 31 67s-12.991 57.21-31 67"
              opacity=".3"
            />
            <path
              stroke="rgb(var(--color-brand-primary))"
              strokeWidth="2"
              d="M250 100c18.009 9.79 31 35.983 31 67s-12.991 57.21-31 67"
              opacity=".3"
            />
            <rect width="48" height="48" x="216" y="200" fill="rgb(var(--color-brand-primary))" opacity=".3" rx="24" />
            <rect width="48" height="48" x="216" y="112" fill="rgb(var(--color-brand-primary))" opacity=".3" rx="24" />
            <path
              fill="#FFF"
              d="M231.044 133c-7.937 0-14.044-6.156-14.044-14.002 0-7.296 5.123-13.346 12.068-14.364.641-.12 1.333.208 1.602.806a1.406 1.406 0 01-.233 1.539 6.928 6.928 0 00-1.642 4.285c.232 4.84 4.394 8.691 9.168 8.596a9.246 9.246 0 007.17-3.943 1.397 1.397 0 11.545-.59c.565-.232 1.22-.05 1.565.463.357.526.345 1.227-.033 1.74-2.468 3.422-6.25 5.47-10.359 5.47h-6.807z"
            />
            <path
              fill="#FFF"
              d="M231.043 133c7.936 0 14.043-6.156 14.043-14.002 0-7.296-5.122-13.346-12.067-14.364-.642-.12-1.333.208-1.603.806a1.405 1.405 0 01.233 1.539 6.928 6.928 0 001.642 4.285c-.232 4.84-4.393 8.691-9.168 8.596a9.246 9.246 0 01-7.17-3.943 1.398 1.398 0 11.546-.59c-.565-.232-1.22-.05-1.565.463-.357.526-.345 1.227.033 1.74 2.468 3.422 6.25 5.47 10.36 5.47h6.806z"
              opacity=".4"
            />
            <path
              fill="#FFF"
              d="M251.286 249.2c-6.214 0-11.3-5.127-11.286-11.2 0-6.073 5.072-11.2 11.286-11.2 6.213 0 11.3 5.127 11.285 11.2a11.44 11.44 0 01-3.428 8.064 11.651 11.651 0 01-7.857 3.136z"
            />
            <path
              fill="#FFF"
              d="M252.571 249.2c-6.213 0-11.3-5.127-11.285-11.2 0-6.073 5.072-11.2 11.285-11.2 6.214 0 11.3 5.127 11.286 11.2a11.44 11.44 0 01-3.429 8.064 11.65 11.65 0 01-7.857 3.136z"
              opacity=".4"
            />
            <path
              fill="rgb(var(--color-brand-primary))"
              fillRule="nonzero"
              d="M206 249.2c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"
              opacity=".1"
            />
            <text
              fill="rgb(var(--color-brand-primary))"
              fontFamily="Arial-BoldMT, Arial"
              fontSize="30"
              fontWeight="bold"
              transform="translate(220 235)"
            >
              404
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage; 