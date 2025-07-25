import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // biome-ignore lint/suspicious/noConsole: <Error Log>
    console.error(
      '404 Error: User attempted to access non-existent route:',
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 font-bold text-4xl">404</h1>
        <p className="mb-4 text-gray-600 text-xl">Oops! Page not found</p>
        <a className="text-blue-500 underline hover:text-blue-700" href="/">
          Return to Home
        </a>
      </div>
    </div>
  );
};
