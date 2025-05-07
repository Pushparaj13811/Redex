import { useParams, useSearchParams, useLocation } from 'react-router-dom';
import { useMemo } from 'react';

interface UseRouteParamsOptions {
  /** Parse string numbers to actual number type */
  parseNumbers?: boolean;
  /** Parse query param 'true'/'false' strings to boolean */
  parseBooleans?: boolean;
  /** Parse query param JSON strings */
  parseJson?: boolean;
}

type ParsedParams<T = Record<string, string>> = {
  [K in keyof T]: T[K] extends string
    ? string | number | boolean | object
    : T[K];
};

/**
 * Custom hook for handling route parameters and query string values
 * 
 * Provides a convenient way to access URL parameters and query strings
 * with optional parsing of values into appropriate JavaScript types
 */
export const useRouteParams = <T extends Record<string, string> = Record<string, string>>(
  options: UseRouteParamsOptions = {}
) => {
  // Default options
  const {
    parseNumbers = true,
    parseBooleans = true,
    parseJson = true,
  } = options;

  // Get route params from React Router
  const params = useParams<T>();
  
  // Get query params from React Router
  const [searchParams] = useSearchParams();
  
  // Get location for state passed during navigation
  const location = useLocation();

  // Parse route parameters with the specified options
  const parsedParams = useMemo(() => {
    const result: ParsedParams<T> = { ...params };

    // Apply parsing based on options
    Object.entries(params).forEach(([key, value]) => {
      if (value === undefined) return;

      // Try to parse numbers
      if (parseNumbers && !Number.isNaN(Number(value)) && /^-?\d+(\.\d+)?$/.test(value)) {
        result[key as keyof T] = Number(value) as any;
        return;
      }

      // Try to parse booleans
      if (parseBooleans) {
        if (value.toLowerCase() === 'true') {
          result[key as keyof T] = true as any;
          return;
        }
        if (value.toLowerCase() === 'false') {
          result[key as keyof T] = false as any;
          return;
        }
      }

      // Try to parse JSON
      if (parseJson && value.startsWith('{') && value.endsWith('}')) {
        try {
          const parsedValue = JSON.parse(value);
          result[key as keyof T] = parsedValue;
        } catch (error) {
          // If parsing fails, keep the original string
          console.warn(`Failed to parse JSON for parameter ${key}:`, error);
        }
      }
    });

    return result;
  }, [params, parseNumbers, parseBooleans, parseJson]);

  // Parse query parameters into a key-value object with the same parsing logic
  const queryParams = useMemo(() => {
    const result: Record<string, string | number | boolean | object> = {};
    
    // Convert URLSearchParams to object and apply parsing
    Array.from(searchParams.entries()).forEach(([key, value]) => {
      // Skip if no value
      if (value === undefined) return;

      // Try to parse numbers
      if (parseNumbers && !Number.isNaN(Number(value)) && /^-?\d+(\.\d+)?$/.test(value)) {
        result[key] = Number(value);
        return;
      }

      // Try to parse booleans
      if (parseBooleans) {
        if (value.toLowerCase() === 'true') {
          result[key] = true;
          return;
        }
        if (value.toLowerCase() === 'false') {
          result[key] = false;
          return;
        }
      }

      // Try to parse JSON
      if (parseJson && value.startsWith('{') && value.endsWith('}')) {
        try {
          const parsedValue = JSON.parse(value);
          result[key] = parsedValue;
        } catch (error) {
          // If parsing fails, keep the original string
          result[key] = value;
        }
      } else {
        // Keep as string if no parsing applied
        result[key] = value;
      }
    });

    return result;
  }, [searchParams, parseNumbers, parseBooleans, parseJson]);

  // Helper to get a single query parameter with proper typing
  const getQueryParam = <R = string | number | boolean | object>(
    key: string,
    defaultValue?: R
  ): R | undefined => {
    return queryParams[key] !== undefined
      ? (queryParams[key] as R)
      : defaultValue;
  };

  // Helper to check if a query parameter exists
  const hasQueryParam = (key: string): boolean => {
    return searchParams.has(key);
  };

  // Helper to build a URL with updated query parameters
  const buildUrl = (
    updatedParams: Record<string, string | number | boolean | null | undefined>
  ): string => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    
    // Update or remove params based on the provided values
    Object.entries(updatedParams).forEach(([key, value]) => {
      if (value === null || value === undefined) {
        newSearchParams.delete(key);
      } else {
        newSearchParams.set(key, String(value));
      }
    });
    
    const queryString = newSearchParams.toString();
    const { pathname } = location;
    
    return queryString ? `${pathname}?${queryString}` : pathname;
  };

  return {
    // Route parameters
    params: parsedParams,
    
    // Query parameters
    queryParams,
    getQueryParam,
    hasQueryParam,
    buildUrl,
    
    // Raw values for advanced use cases
    rawParams: params,
    searchParams,
    location,
  };
};

export default useRouteParams;
