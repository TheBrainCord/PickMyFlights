"use client"; 
import { useState } from 'react';

const Footer = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <footer className="w-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white py-6 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">        
        <div className="text-sm sm:text-center text-gray-400">
          &copy; 2024 PickMyFlights. All rights reserved.
        </div>        
        <div className="text-sm sm:text-left mb-4 sm:mb-0">
          <p>
            ✈️ Your journey starts here – PickMyFlights, bringing destinations closer every day!
          </p>
        </div>        
        <div className="relative">
          <button
            className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
            onClick={toggleDropdown}
          >
            United States - English
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 bottom-full mb-2 w-48 bg-gray-700 shadow-lg rounded-md text-sm z-10">
              <ul className="py-2">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-600">
                    United States - English
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-600">
                    France - Français
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-600">
                    Germany - Deutsch
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-600">
                    India - हिंदी
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-600">
                    Spain - Español
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
