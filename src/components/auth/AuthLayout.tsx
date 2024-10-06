import React from 'react';
import { Plane } from 'lucide-react';

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      {/* Header */}
      <header className="w-full py-6 px-8 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Plane className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-900">PickMyFlights</span>
        </div>
        <nav>
          <a
            href="/"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Home
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full py-6 px-8 text-center text-gray-600">
        <p>© 2024 PickMyFlights. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AuthLayout;